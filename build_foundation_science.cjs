// Build data/foundation-science-book.js + images/foundation-science/* from the
// official Foundation Science textbook (OpenDocument) supplied by the owner.
//
// Usage:
//   node build_foundation_science.cjs            -> writes data + images
//   node build_foundation_science.cjs --dump     -> prints the block map only
//   node build_foundation_science.cjs --find X   -> prints blocks matching /X/
//
// Source : data/Foundation SCIENCE/foundation science.odt
// Output : data/foundation-science-book.js  (window.foundationScienceBook)
//          images/foundation-science/*.png    (figures lifted from the book)
//
// The textbook body is scanned from content.xml. Headings in the source are
// plain paragraphs that start with "## ", lists are paragraphs that start with
// "- " and tables are pipe rows, so no ODF list/table markup has to be
// interpreted. Figures are draw:frame images anchored inside paragraphs and are
// copied out with their anchor position preserved.
//
// The textbook has no heading styles at all, so the unit boundaries cannot be
// derived from markup. Instead the book spine (grade -> theme -> unit -> page)
// comes from data/science-book.js and ANCHORS below maps every syllabus topic
// to the textbook paragraph that opens its section. Anything the textbook
// covers that is not in the syllabus (revision exercises, energy, worked
// examples) becomes an extra topic in the same theme.

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { spawnSync } = require('child_process');

const ROOT = __dirname;
const ODT = path.join(ROOT, 'data', 'Foundation SCIENCE', 'foundation science.odt');
const OUT_JS = path.join(ROOT, 'data', 'foundation-science-book.js');
const OUT_IMG_DIR = path.join(ROOT, 'images', 'foundation-science');
const DUMP_ONLY = process.argv.includes('--dump');
const FIND = (() => {
    const i = process.argv.indexOf('--find');
    return i > -1 ? process.argv[i + 1] : null;
})();

/* ------------------------------------------------------------------ *
 * Minimal ZIP reader (ODF packages are plain zips, deflate or stored)
 * ------------------------------------------------------------------ */
function readZip(file) {
    const buf = fs.readFileSync(file);
    let eocd = -1;
    for (let i = buf.length - 22; i >= 0 && i > buf.length - 22 - 0xffff; i--) {
        if (buf.readUInt32LE(i) === 0x06054b50) { eocd = i; break; }
    }
    if (eocd < 0) throw new Error('not a zip file: ' + file);
    const count = buf.readUInt16LE(eocd + 10);
    let ptr = buf.readUInt32LE(eocd + 16);
    const entries = new Map();
    for (let n = 0; n < count; n++) {
        if (buf.readUInt32LE(ptr) !== 0x02014b50) throw new Error('bad central directory');
        const method = buf.readUInt16LE(ptr + 10);
        const compSize = buf.readUInt32LE(ptr + 20);
        const nameLen = buf.readUInt16LE(ptr + 28);
        const extraLen = buf.readUInt16LE(ptr + 30);
        const commentLen = buf.readUInt16LE(ptr + 32);
        const localOff = buf.readUInt32LE(ptr + 42);
        const name = buf.slice(ptr + 46, ptr + 46 + nameLen).toString('utf8');
        entries.set(name, { method, compSize, localOff });
        ptr += 46 + nameLen + extraLen + commentLen;
    }
    const read = (name) => {
        const e = entries.get(name);
        if (!e) return null;
        const lh = e.localOff;
        if (buf.readUInt32LE(lh) !== 0x04034b50) throw new Error('bad local header for ' + name);
        const nameLen = buf.readUInt16LE(lh + 26);
        const extraLen = buf.readUInt16LE(lh + 28);
        const start = lh + 30 + nameLen + extraLen;
        const raw = buf.slice(start, start + e.compSize);
        return e.method === 0 ? raw : zlib.inflateRawSync(raw);
    };
    const list = () => Array.from(entries.keys());
    return { list, read };
}

/* ------------------------------------------------------------------ *
 * XML helpers
 * ------------------------------------------------------------------ */
function decodeEntities(s) {
    return String(s)
        .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"').replace(/&apos;/g, "'")
        .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
        .replace(/&amp;/g, '&');
}
function stripTags(xml) {
    return decodeEntities(
        xml
            .replace(/<text:s\/>/g, ' ')
            .replace(/<text:tab\/>/g, ' ')
            .replace(/<text:line-break\/>/g, ' ')
            .replace(/<[^>]+>/g, '')
    );
}
// The source was pasted from a LaTeX-flavoured draft; tidy the leftovers.
function tidyMath(text) {
    return String(text)
        .replace(/\$\s*\\?/g, '')
        .replace(/\\mathrm\{([^{}]*)\}/g, '$1')
        .replace(/\\text\{([^{}]*)\}/g, '$1')
        .replace(/\\(?:left|right)\s*/g, '')
        .replace(/\\,/g, ' ')
        .replace(/[{}]/g, '')
        .replace(/\bmathrm\b/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

// Display equations were copied out of a rendered LaTeX file, so the braces are
// gone and every character sits in its own space ("\mathrm m a s s"). Rebuild a
// readable form: drop the commands, join the spaced-out characters and keep
// the line breaks of the original equation.
function tidyLatex(text) {
    const src = String(text);
    if (src.indexOf('\\') < 0) return src;
    let s = src
        .replace(/\\begin\{?[A-Za-z]*\}?/g, '')
        .replace(/\\end\{?[A-Za-z]*\}?/g, '')
        .replace(/\\mathrm/g, '')
        .replace(/\\text/g, '')
        .replace(/\\underline/g, '')
        .replace(/\\(?:left|right)/g, '')
        .replace(/\\times/g, 'x')
        .replace(/\\cdot/g, '*')
        .replace(/\\div/g, '/')
        .replace(/\\%/g, '%')
        .replace(/\\\\/g, '\n')
        .replace(/\\frac/g, '/')
        .replace(/(^|\s)frac(?=[\s0-9])/g, '$1/')
        .replace(/\\[a-zA-Z]+/g, '')
        .replace(/\bmathrm\b/g, '')
        .replace(/\bunderline\b/g, '');
    const lines = s.split('\n').map((line) => {
        const tokens = line.trim().split(/[\s\u00a0\u2000-\u200a\u202f\u205f\u3000]+/).filter(Boolean);
        const out = [];
        tokens.forEach((t) => {
            const prev = out.length ? out[out.length - 1] : '';
            const isNum = (v) => /^[0-9]+(\.[0-9]+)?$/.test(v);
            const isDigit = (v) => /^[0-9]$/.test(v);
            const isWord = (v) => /^[a-z]+[.,;:)]?$/i.test(v);
            if (prev && t === '.' && isNum(prev)) { out[out.length - 1] = prev + '.'; return; }
            if (prev && prev.endsWith('.') && isDigit(t)) { out[out.length - 1] = prev + t; return; }
            if (prev && (isNum(prev) || isDigit(prev)) && (isNum(t) || isDigit(t))) { out[out.length - 1] = prev + t; return; }
            if (prev && isWord(prev) && isWord(t)) { out[out.length - 1] = prev + t; return; }
            out.push(t);
        });
        return out.join(' ')
            .replace(/\\/g, '')
            .replace(/\s*\^\s*/g, '^')
            .replace(/\s*_\s*/g, '_')
            .replace(/([a-z0-9)])x([a-z0-9(])/g, '$1 x $2')
            .replace(/([a-z0-9)])\s*\/\s*([a-z0-9(])/g, '$1 / $2')
            .replace(/\s+/g, ' ')
            .trim();
    });
    return lines.join('\n').trim();
}
function slug(text, max = 48) {
    return String(text)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .slice(0, max) || 'figure';
}
// Compare and display helpers ignore punctuation and case.
function normKey(text) {
    return String(text)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, ' ')
        .trim();
}
// "1.1: THE SEVEN SI BASE UNITS OF MEASUREMENT" -> "1.1: The Seven SI Base Units of Measurement"
const SMALL_WORDS = new Set(['a', 'an', 'the', 'of', 'and', 'or', 'in', 'on', 'at', 'to', 'for', 'by', 'as', 'is', 'are', 'its', 'it', 'with', 'from', 'into', 'their']);
const KEEP_UPPER = new Set(['si', 'cm', 'mm', 'km', 'kg', 'g', 'n', 'm', 's', 'a', 'v', 'ac', 'dc', 'diagram']);
function prettyHeading(text) {
    const clean = String(text).replace(/^#+\s*/, '').replace(/[:\s]+$/, '').trim();
    if (!clean) return clean;
    if (!/[a-z]/.test(clean)) {
        return clean
            .toLowerCase()
            .split(/(\s+)/)
            .map((w, i, arr) => {
                if (/^\s+$/.test(w)) return w;
                const bare = w.replace(/[^a-z0-9]/g, '');
                if (!bare) return w;
                if (KEEP_UPPER.has(bare)) return w.toUpperCase();
                const isFirst = i === 0;
                const isLast = i === arr.length - 1;
                if (!isFirst && !isLast && SMALL_WORDS.has(bare)) return w;
                return w.charAt(0).toUpperCase() + w.slice(1);
            })
            .join('');
    }
    return clean;
}

/* ------------------------------------------------------------------ *
 * content.xml -> ordered blocks
 * ------------------------------------------------------------------ */
function extractBlocks(contentXml) {
    const body = contentXml.slice(contentXml.indexOf('<office:text'));
    const blocks = [];
    const re = /<text:(p|h)([^>]*?)(\/>|>([\s\S]*?)<\/text:\1>)/g;
    let m;
    while ((m = re.exec(body)) !== null) {
        const kind = m[1];
        const inner = m[4] || '';
        const images = [];
        const imgRe = /<draw:frame[^>]*>([\s\S]*?)<\/draw:frame>/g;
        let im;
        while ((im = imgRe.exec(inner)) !== null) {
            const href = /xlink:href="([^"]+)"/.exec(im[1]);
            const name = /draw:name="([^"]+)"/.exec(im[1]);
            const title = /<svg:title>([\s\S]*?)<\/svg:title>/.exec(im[1]);
            const descr = /<svg:desc>([\s\S]*?)<\/svg:desc>/.exec(im[1]);
            if (!href) continue;
            images.push({
                file: href[1],
                name: name ? name[1] : '',
                title: title ? stripTags(title[1]).trim() : '',
                descr: descr ? stripTags(descr[1]).trim() : ''
            });
        }
        const raw = stripTags(inner).replace(/\s+/g, ' ').trim();
        const text = tidyLatex(tidyMath(raw));
        blocks.push({
            kind,
            text,
            heading: kind === 'h' || raw.startsWith('## ') || raw.startsWith('# '),
            latex: raw.indexOf('\\') >= 0,
            images
        });
    }
    return blocks;
}

/* ------------------------------------------------------------------ *
 * Textbook anchors
 *
 * Each entry is [topicId, "text that opens the section"]. The text is the
 * start of the textbook paragraph, matched case- and punctuation-insensitively.
 * Entries must be listed in the order they appear in the textbook.
 * ------------------------------------------------------------------ */
const ANCHORS = [
    /* ---------------- Grade 7 ---------------- */
    // Theme 1 - Nature of Science
    ['g7-t1-1', '1.1. DEFINITIONS OF SCIENCE'],
    ['g7-t1-1', '1.2: THE IMPORTANCE OF SCIENCE'],
    ['g7-t1-2', '1.3: THE BRANCHES OF SCIENCE'],
    ['g7-t1-2', '1.4: THE SCIENTIFIC METHOD'],
    ['g7-t1-2', '1.5: SKILLS NEEDED TO BE A GOOD SCIENCTIST'],
    ['g7-t1-3', '1.6: SOME FAMOUS SCIENTISTS'],
    ['g7-t1-4', '1.7: SOME SCIENTIFIC INSTRUMENTS'],
    ['g7-t1-4', 'HOW TO TAKE CARE OF SCIENTIFIC INSTRUMENTS'],
    ['g7-t1-4', 'SCIENTIFIC INSTRUMENTS'],
    ['g7-t1-5', 'UNIT 2.0: LIVINGTHINGS AND NON-LIVING THINGS'],
    ['g7-t1-6', '1.1: CHARACTERISTICS OF LIVING ORGAINISMS'],
    ['g7-t1-7', '1.3. DIFFERENCES BETWEEN LIVING AND NON-LIVING THINGS'],
    ['g7-t1-8', '2.0: CLASSIFICATION OF LIVING ORGANISMS'],
    ['g7-t1-8', '1. UNICELLULAR ORGANISMS'],
    ['g7-t1-rev', 'REVISION QUESTIONS: THEMES 1 AND 2'],
    ['g7-t1-rev', 'ESSAY'],
    ['g7-t1-rev', 'OBJECTIVE QUESTIONS'],
    ['g7-t1-9', 'UNIT 3.0: MEASUREMENT'],
    ['g7-t1-10', 'UNIT 1.1: SYSTEM OF UNITS OF MEASUREMENT'],
    ['g7-t1-10', '1.2: THE SEVEN SI BASE UNITS OF MEASUREMENT'],
    ['g7-t1-10', '1.4: LENGTH'],
    ['g7-t1-10', 'Conversion of units of length (distance)'],
    ['g7-t1-10', '1.5: VOLUME'],
    ['g7-t1-10', 'Conversion of units of volume'],
    ['g7-t1-10', 'Worked example:'],
    ['g7-t1-10', 'Method:'],
    ['g7-t1-10', '1.5.4: How to measure volume of liquid using a measuring cylinder'],
    ['g7-t1-10', 'Method:'],
    ['g7-t1-11', 'UNIT 3.2: MASS OF SOLID OBJECTS'],
    ['g7-t1-11', 'WEIGHT = Mass x acceleration due to gravity (W =mg)'],
    ['g7-t1-11', 'Worked example:'],
    ['g7-t1-12', '3.4: DENSITY'],
    ['g7-t1-12', 'Procedure'],
    ['g7-t1-12', 'Results'],
    ['g7-t1-13', 'UNIT 4.0: MEASUREMENT OF MOTION (SPEED, DISTANCE AND TIME)'],
    ['g7-t1-13', 'WORKED EXAMPLES:'],
    ['g7-t1-rev2', 'REVISION QUESTIONS ESSAY'],
    ['g7-t1-rev2', 'OBJECTIVES QUESTIONS'],
    // Theme 2 - Matter
    ['g7-t2-1', 'UNIT 1.1: PARTICULATE NATURE OF MATTER'],
    ['g7-t2-2', 'Unit 1.2: The Kinetic energy theory'],
    ['g7-t2-3', '1.3: EXPLAINING THE THREE STATES OF MATTER'],
    ['g7-t2-3', 'IN SOLIDS'],
    ['g7-t2-3', 'IN LIQUIDS:'],
    ['g7-t2-3', 'IN GASES'],
    ['g7-t2-3', '1.3. CHANGES OF STATE OF MATTER'],
    ['g7-t2-3', '6. GAS TO SOLID (DEPOSITION)'],
    ['g7-t2-4', 'DIFFERENCES BETWEEN EVAPORATION AND BOILING'],
    ['g7-t2-rev', 'ESSAY REVISION EXERCISE'],
    ['g7-t2-rev', 'OBJECTIVE QUESTION S (STATES OF MATTER)'],
    ['g7-t2-5', 'UNIT 2.0: FORCES AND ENERGY'],
    ['g7-t2-5', '2.1: DEFINITION OF FORCES'],
    ['g7-t2-5', '2.2: EFFECTS OF A FORCE'],
    ['g7-t2-5', '2.3: MEASUREMENT OF FORCE'],
    ['g7-t2-5', 'Force = Mass x Acceleration'],
    ['g7-t2-5', 'Weight = mass x Acceleration due to gravity'],
    ['g7-t2-6', '2.4: DIFFERENT TYPES OF FORCES'],
    ['g7-t2-7', 'CONTACT AND NON-CONTACT FORCES'],
    ['g7-t2-6', '1. GRAVITATIONAL FORCE'],
    ['g7-t2-6', 'ADVANTAGES OF FRICTIONAL FORCE'],
    ['g7-t2-6', 'DISADVANTAGES OF FRICTIONAL FORCE'],
    ['g7-t2-6', 'WAYS OF REDUCING FRICTION'],
    ['g7-t2-6', '2.5. BALANCED AND UNBALANCED FORCES'],
    ['g7-t2-8', 'UNIT: 3.0: TURNING EFFECTS OF FORCES (PRINCIPLES OF MOMENT)'],
    ['g7-t2-9', '3. 1: THE LAW OR PRINCIPLE OF MOMENT'],
    ['g7-t2-10', 'APPLICATION OF MOMENTS'],
    ['g7-t2-energy', 'UNIT 4.0: ENERGY'],
    ['g7-t2-energy', '4.2: POTENTIAL ENERGY'],
    ['g7-t2-energy', 'Worked example 2'],
    ['g7-t2-energy', 'Solution'],
    ['g7-t2-energy', '3.3: KINETIC ENERGY'],
    ['g7-t2-rev2', 'OBJECTIVE QUESTIONS'],
    // Theme 3 - Chemical Changes Part 1
    ['g7-t3-1', 'CHARACTERISTICS OF PURE SUBSTANCES'],
    ['g7-t3-1', 'UNIT 1.0: ELEMENTS'],
    ['g7-t3-2', 'UNIT 2.0: COMPOUND'],
    ['g7-t3-2', '2.2.: PREPARATION OF SIMPLE COMPOUNDS'],
    ['g7-t3-3', '3. 0: IMPURE SUBSTANCES (OR MIXTURES)'],
    ['g7-t3-3', '3. 1: DIFFERENCES BETWEEN MIXTURES AND COMPOUNDS'],
    ['g7-t3-4', 'UNIT 4.0: SEPARATING METHODS'],
    ['g7-t3-4', '4.1 Sieving'],
    ['g7-t3-4', '4.2 Winnowing'],
    ['g7-t3-4', '4.3. Filtration'],
    ['g7-t3-4', 'Method'],
    ['g7-t3-4', 'Result'],
    ['g7-t3-4', '4.5: Distillation:'],
    ['g7-t3-4', '4.6 Fractional distillation'],
    ['g7-t3-4', '4.7: Sublimation:'],
    ['g7-t3-4', 'Method'],
    ['g7-t3-4', 'Result:'],
    ['g7-t3-4', '4:8: USE OF SEPARATING FUNNEL'],
    ['g7-t3-4', 'Method and result'],
    ['g7-t3-rev', 'ESSAY REVISION QUESTIONS'],
    ['g7-t3-rev', 'OBJECTIVE QUESTIONS'],
    // Theme 4 - Air and Water
    ['g7-t4-1', 'UNIT 1.0: GENERAL PHYSICAL PROPERTIES OF AIR'],
    ['g7-t4-1', '1.1: WHY IS AIR A MIXTURE OF GASES AND NOT A COMPOUND?'],
    ['g7-t4-2', '1.3: PROPERTIES AND USES OF SOME OF THE COMPONENTS OF AIR'],
    ['g7-t4-2', 'PHYSICAL PROPERTIES OF NITROGEN'],
    ['g7-t4-2', 'CHEMICAL PROPERTIES OF NITROGEN'],
    ['g7-t4-2', 'USES OF NITROGEN'],
    ['g7-t4-2', 'PHYSICAL PROPERTIES OF OXYGEN'],
    ['g7-t4-2', 'CHEMICAL PROPERTIES OF OXYGEN'],
    ['g7-t4-2', 'USES OF OXYGEN'],
    ['g7-t4-2', 'PROPERTIES OF CARBON DIOXIDE'],
    ['g7-t4-2', 'USES OF CARBON DIOXIDE'],
    ['g7-t4-2', 'USES OF SOME INERT GASES:'],
    ['g7-t4-3', 'SIMPLE LABORATORY TESTS FOR SOME GASES'],
    ['g7-t4-3', 'EXPERIMENTS ON AIR'],
    ['g7-t4-3', 'Method:'],
    ['g7-t4-3', 'Method:'],
    ['g7-t4-3', 'Experiment 3: To show that air has weight/mass/occupies space'],
    ['g7-t4-3', 'Method:'],
    ['g7-t4-4', '2.3: TWO SIMPLE LABORATORY TESTS FOR WATER:'],
    ['g7-t4-4', 'Test 1. Using anhydrous copper sulphate'],
    ['g7-t4-4', 'Test 2. Using anhydrous cobalt chloride paper'],
    ['g7-t4-4', '2.4: CHEMICAL PROPERTIES OF WATER'],
    ['g7-t4-4', '2.5. SOURCES OF WATER.'],
    ['g7-t4-5', '2. 6. THE WATER CYCLE.'],
    // Theme 5 - Ecology 1
    ['g7-t5-1', 'DEFINITIONS OF ECOLOGY'],
    ['g7-t5-1', 'UNIT 1: ECOLOGICAL TERMS'],
    ['g7-t5-1', '4. Community'],
    ['g7-t5-1', '6. Ecosystem'],
    ['g7-t5-2', '1. Biotic components (living organisms)'],
    ['g7-t5-3', 'Unit 2: INTERRELATIONSHIPS BETWEEN ORGANISMS IN AN ECOSYSTEM'],
    ['g7-t5-3', '1.1: FOOD CHAIN'],
    ['g7-t5-3', '1.2: FOOD WEBS'],
    ['g7-t5-4', '1.3: ECOLOGICAL FACTORS OF AN ECOSYSTEM'],
    ['g7-t5-rev', 'REVISION QUESTIONS'],
    ['g7-t5-rev', 'ESSAY'],
    ['g7-t5-rev', 'OBJECTIVE QUESTIONS'],
    // Theme 6 - Food Part 1
    ['g7-t6-1', 'UNIT 1.0: MAIN FUNCTIONS OF FOOD'],
    ['g7-t6-2', 'UNIT 1.2: THE CLASSES OF FOOD'],
    ['g7-t6-2', 'PRINCIPAL CLASSSES OF FOOD SUBSTANCES'],
    ['g7-t6-2', 'TYPES OF VITAMINS AND THEIR USES'],
    ['g7-t6-2', '1.4: MINERALS'],
    ['g7-t6-2', '1. 6: ROUGHAGE'],
    ['g7-t6-3', '1. 7: BALANCED DIET'],
    ['g7-t6-rev', 'REVISION ESSAY QUESTIONS'],
    ['g7-t6-rev', 'OBJECTIVE QUESTIONS'],
    // Theme 7 - Human Body: Sense Organs
    ['g7-t7-1', '7.1: THE STRUCTURE OF THE MAMMALIAN EYE'],
    ['g7-t7-1', '1.4: FORMATION OF IMAGES IN THE EYE'],
    ['g7-t7-2', 'UNIT 2.0: THE HUMAN EAR'],
    ['g7-t7-2', '2.2: HYGEINE OF THE HUMAN EAR'],
    ['g7-t7-3', 'UNIT 3: THE TONGUE'],
    ['g7-t7-4', 'UNIT 4: THE SKIN AS A SENSE ORGAN'],
    ['g7-t7-5', 'UNIT 5: THE NOSE/OLFACTORY ORGANS'],
    ['g7-t7-rev', 'ESSAY REVISION QUESTIONS'],
    // Theme 8 - Hygiene and Health
    ['g7-t8-1', '8.1: PERSONAL CLEANLINESS AND HEALTH'],
    ['g7-t8-2', '8.2: EXERCISE, RECREATION AND REST'],
    // Theme 9 - Technology
    ['g7-t9-1', '9.1: MEANING OF TECHNOLOGY:'],
    ['g7-t9-1', '9.2: SIMPLE, APPROPRIATE AND ADVANCED TECHNOLOGY'],
    ['g7-t9-2', '9.3: TECHNOLOGICAL PROCESSES'],
    ['g7-t9-2', '9.3.1: RECYCLING'],
    ['g7-t9-2', 'MEANING:'],
    ['g7-t9-2', 'ADVANTAGES OF RECYCLING'],
    ['g7-t9-2', 'MATERIALS THAT ARE RECYCLED'],
    ['g7-t9-2', 'PROBLEMS OF RECYCLING'],

    /* ---------------- Grade 8 ---------------- */
    ['g8-t1-1', 'THEME 1.0: MAGNIFYING INSTRUMENTS'],
    ['g8-t1-2', 'Figure 2.1: The Hand lens'],
    ['g8-t1-3', 'Figure1.2: Parts of the Microscope'],
    ['g8-t1-4', 'UNIT 2: PLANT AND ANIMAL CELLS'],
    ['g8-t1-5', '2. 5: SPECIALISED PLANT AND ANIMAL CELLS'],
    ['g8-t1-6', 'Examples of unicellular organisms include:'],
    ['g8-t1-6', '3. 2: EUGLENA'],
    ['g8-t1-6', 'Plant-like features'],
    ['g8-t1-6', 'Life processes:'],
    ['g8-t1-6', 'Structure:'],
    ['g8-t1-6', 'CLASSIFICATION OF BACTERIA'],
    ['g8-t1-6', 'USEFUL BACTERIA'],
    ['g8-t1-6', 'HARMFUL BACTERIA'],
    ['g8-t1-6', '3.4: AMOEBA (PROTOZOAN) - animal-like'],
    ['g8-t1-6', 'LIFE PROCESSES'],
    ['g8-t1-6', '1.6: FUNGI e.g. RHIZOPUS, MUGOR'],
    ['g8-t1-6', 'GENERAL CHARACTERISTICS OF FUNGI'],
    ['g8-t1-6', 'ECONOMIC IMPORTANCE OF FUNGI'],
    ['g8-t1-6', '1.7: SPIROGYRA (PLANT-LIKE)'],
    ['g8-t1-6', 'LIFE PROCESSES'],
    ['g8-t1-7', 'UNIT 4.0: THE PLANT KINGDOM'],
    ['g8-t1-7', '1.2: CLASSIFICATION OF PLANTS'],
    ['g8-t1-8', '1.2.1: NON-FLOWERING PLANTS'],
    ['g8-t1-9', '1.2.2: FLOWERING PLANTS (ANGIOSPERMS)'],
    ['g8-t1-9', 'STRUCTURE AND FUNCTIONS OF THE LEAF'],
    ['g8-t1-9', 'FUNCTIONS OF THE LEAF'],
    ['g8-t1-9', 'FUNCTIONS OF THE STEM'],
    ['g8-t1-9', 'THE VASCULAR BUNDLE (TRANSPORT SYSTEM IN PLANTS)'],
    ['g8-t1-9', '1.4: INTERNAL SECTIONS OF DICOTYLEDOMOUS STEMS'],
    ['g8-t1-10', 'FUNCTIONS OF PARTS OF A FLOWER'],
    ['g8-t1-11', '2.1: PROCESSES INVOLVED IN SEXUAL REPRODUCTION IN PLANTS'],
    ['g8-t1-11', '2.2: POLLINATION'],
    ['g8-t1-11', 'AGENTS OF POLLINATION'],
    ['g8-t1-11', '2.3: GERMINATION OF SEEDS'],
    ['g8-t1-11', 'TYPES OF GERMINATION'],
    ['g8-t1-11', 'CONDITIONS NECESSARY FOR GERMINATION'],
    ['g8-t1-12', 'UNI 5.0: IMPORTANT PROCESSES IN PLANTS'],
    ['g8-t1-12', 'FACTORS THAT AFFECT PHOTOSYNTHESIS'],
    ['g8-t1-12', 'IMPORTANCE OF PHOTOSYNTHESIS'],
    ['g8-t1-12', 'EXPERIMENTS ON PHOTOSYNTHESIS'],
    ['g8-t1-12', 'Experiment 1: To test for starch in a leaf.'],
    ['g8-t1-12', 'Procedure/Method'],
    ['g8-t1-12', 'EXPERIMENT 2: TO SHOW HOW PLANTS ABSORB AND TRANSPORT WATER'],
    ['g8-t1-12', 'Figure 8: Absorption and transport of water in plants'],
    ['g8-t1-12', '5.2: TRANSLOCATION'],
    ['g8-t1-12', 'Figure 9: Translocation (Ring Experiment)'],
    ['g8-t1-12', '5.3: TRANSPIRATION'],
    ['g8-t1-12', 'EXPERIMENT: To show transpiration in leaves of plants'],
    ['g8-t1-12', 'Figure 10: Transpiration'],
    ['g8-t1-12', 'Method:'],
    ['g8-t1-12', 'EXPERIMENTS ON DIFFUSION'],
    ['g8-t1-12', 'METHOD:'],
    ['g8-t1-12', '5.5. OSMOSIS'],
    ['g8-t1-12', 'Experiment 3: To demonstrate osmosis in living materials'],
    ['g8-t1-12', 'Method:'],
    ['g8-t1-12', 'Figure 13: Osmosis in non-living materials'],
    ['g8-t1-13', 'UNIT 6.0: STUCTURE AND FUNCTIONS OF MULTICELLULAR ORGANISMS: ADAPTATIONS PART II'],
    ['g8-t1-13', 'INVERTEBRATES'],
    ['g8-t1-13', 'PHYLA'],
    ['g8-t1-13', 'CLASSES'],
    ['g8-t1-13', '6.2: PHYLUM ARTHROPODA'],
    ['g8-t1-13', 'Figure 3: Some examples of arthropods'],
    ['g8-t1-13', 'ECONOMIC IMPORTANCE OF THE COCKROACH'],
    ['g8-t1-rev', 'ESSAY REVISION QUESTIONS (ARTHROPODS, SPIDER AND EARTHWORM)'],
    ['g8-t1-rev', 'OBJECTIVE QUSTIONS'],
    // Theme 2 - Matter Part 2
    ['g8-t2-1', 'UNIT 2.0: LIVERS (SIMPLE MACHINES)'],
    ['g8-t2-2', 'OTHER EXAMPLES OF SIMPLE MACHINES'],
    ['g8-t2-3', '3.0: EFFICIENCY OF A MACHINE'],
    ['g8-t2-4', '4.0: WORK AND POWER'],
    ['g8-t2-4', 'Worked Example 1:'],
    ['g8-t2-4', 'Worked Example 2:'],
    ['g8-t2-4', 'Worked example 3:'],
    ['g8-t2-rev', 'ESSAY REVISION QUESTIONS'],
    ['g8-t2-rev', 'OBJECTIVE QUESTIONS'],
    // Theme 3 - Chemical Changes Part 2
    ['g8-t3-1', 'UNIT 1.1: PHYSICAL AND CHEMICAL CHANGES'],
    ['g8-t3-2', 'UNIT 1.2: THE PRINCIPLE OF CONSERVATION OF ENERGY'],
    ['g8-t3-3', '1. 3: SOLUTIONS, SOLUBILITY AND CRYSTALLIZATION'],
    ['g8-t3-3', '1.4: SATURATED SOLUTION'],
    ['g8-t3-3', '1.5: SOLUBILITY AND SOLUBILITY CURVE'],
    ['g8-t3-3', 'EXAMPLE OF A SOLUBLITY GRAPH (CURVE)'],
    ['g8-t3-4', '1.6: CRYSTALLIZATION AND GROWING OF CRYSTALS'],
    ['g8-t3-4', 'Procedure:'],
    // Theme 4 - Air and Water Part 2
    ['g8-t4-1', 'UNIT 1: BURNING AND RUSTING'],
    ['g8-t4-1', '1.2: EXPERIMENTS'],
    ['g8-t4-1', 'Observation:'],
    ['g8-t4-1', 'Method:'],
    ['g8-t4-1', 'Observation:'],
    ['g8-t4-2', 'UNIT 1.3: RUSTING'],
    ['g8-t4-2', 'Conditions necessary for rusting'],
    ['g8-t4-2', 'Method:'],
    ['g8-t4-2', 'Conclusion:'],
    ['g8-t4-2', 'METHODS USED TO PREVENT RUSTING'],
    ['g8-t4-3', 'UNIT 2.0: WATER AND AIR PRESSURE'],
    ['g8-t4-3', 'PRESSURE IN SOLIDS'],
    ['g8-t4-3', 'WATER PRESSURE/PRESSURE IN LIQUIDS'],
    ['g8-t4-3', 'FACTORS THAT AFFECT PRESSURE IN LIQUIDS'],
    ['g8-t4-3', 'PROCEDURE;'],
    ['g8-t4-4', 'EXPERIMENT 2: Pressure in liquids increases with depth'],
    ['g8-t4-4', 'Procedure:'],
    ['g8-t4-4', 'Diagram'],
    ['g8-t4-4', 'APPLICATION OF PRESSURE IN LIQUIDS'],
    ['g8-t4-4', 'AIR PRESSURE'],
    ['g8-t4-4', 'USES OF AIR AND WATER PRESSURE'],

    /* ---------------- Grade 9 ---------------- */
    // Theme 4 - Energy
    ['g9-t4-1', 'UNIT 1.5: TEMPERATURE AND ITS MEASUREMENT'],
    ['g9-t4-1', 'THERMOMETRIC SCALES'],
    ['g9-t4-1', 'TEMPERATURE CONVERSION TABLE'],
    ['g9-t4-1', '1.6: DIFFERENCES BETWEEN HEAT AND TEMPERATURE'],
    ['g9-t4-1', 'REVISION ESSAY QUESTIONS (HEAT ENERGY)'],
    ['g9-t4-1', 'OBJECTIVE QUESTIONS'],
    ['g9-t4-2', 'UNIT 2.0: MOVEMENT OF LIGHT ENERGY'],
    ['g9-t4-2', '1.0: SUMMARY PROPERTIES OF LIGHT'],
    ['g9-t4-2', '1.1: SOURCES OF LIGHT'],
    ['g9-t4-2', 'TYPES OF BODIES'],
    ['g9-t4-2', '1.2: HOW LIGHT TRAVELS (PROPAGATION OF LIGHT)'],
    ['g9-t4-2', 'EXPRIMENT TO SHOW HOW LIGHT TRAVELS IN A STRAIGHT LINE'],
    ['g9-t4-2', '1.4: WHAT HAPPENS TO LIGHT AS IT TRAVELS'],
    ['g9-t4-2', 'TYPES OF OBJECTS OR SUBSTANCES'],
    ['g9-t4-2', '1.5: FORMATION OF SHADOWS'],
    ['g9-t4-2', '1.6: FORMATION OF SOLAR AND LUNAR ECLIPSES'],
    ['g9-t4-2', '1.7: REFLECTION OF LIGHT'],
    ['g9-t4-2', '1.9: MIRRORS'],
    ['g9-t4-2', 'TYPES OF IMAGES'],
    ['g9-t4-2', 'FORMATION OF IMAGE IN A PLANE MIRROR'],
    ['g9-t4-2', 'USES OF PLANE MIRRORS'],
    ['g9-t4-2', 'SOME TERMS USED FOR CURVES MIRRORS'],
    ['g9-t4-2', 'USES OF CONVERGING OR CONCAVE MIRRORS'],
    ['g9-t4-2', 'USES OF DIVERGING OR CONVEX MIRRORS'],
    ['g9-t4-2', '1.14: THE EYE DEFECTS'],
    ['g9-t4-2', 'Figure 1: Circle of Primary colours'],
    ['g9-t4-3', '1.4. WAVE AND WAVE MOTION'],
    ['g9-t4-3', 'LONGITUDINAL WAVES'],
    ['g9-t4-3', 'TRANSVERSE WAVES'],
    ['g9-t4-3', '1.7: FACTORS THAT AFFECT SPEED OF SOUND'],
    ['g9-t4-3', '1.8: ECHOES'],
    ['g9-t4-3', 'CALCULATING THE SPEED OF SOUND'],
    ['g9-t4-3', 'OBJECTIVE QUESTIONS'],
    ['g9-t4-4', 'UNIT 4.0: ELECTRICAL ENERGY/ELECTRICITY'],
    ['g9-t4-4', '4. 1: SOURCES OF ELECTRICITY'],
    ['g9-t4-4', '4.2: SOME TERMS USED IN ELECTRICITY'],
    ['g9-t4-4', '4.3: ELECTRIC CURRENT AND CIRCUITS'],
    ['g9-t4-4', '4.4: COMPONENTS OF AN ELECTRIC CIRCUIT'],
    ['g9-t4-4', '4.5: SYMBOLS AND USES OF COMPONENTS OF AN ELECTRIC CIRCUIT'],
    ['g9-t4-4', '4.6: CIRCUITS IS SERIES AND PARALLEL'],
    ['g9-t4-4', '4.8: POWER OF ELECTRICITY'],
    ['g9-t4-4', '4.9: THE WIRING IN A MODERN THREE PIN PLUG'],
    ['g9-t4-4', '4.10: FUSES'],
    ['g9-t4-4', '4.11: SAFETY PRECAUTIONS OF ELECTRICITY'],
    ['g9-t4-4', 'REVISION QUESTIONS'],
    ['g9-t4-4', 'ESSAY'],
    ['g9-t4-4', 'OBJECTIVE QUESTIONS'],
    // Theme 5 - Human Body Organs and Systems
    ['g9-t5-1', 'THEME 5.0: HUMAN BODY SYSTEMS'],
    ['g9-t5-1', '1.1: DIGESTION IN DIFFERENT REGIONS OF THE DIGESTIVE SYSTEM OF MAN'],
    ['g9-t5-1', '1.3: ABSORPTION OF AMINO ACIDS AND GLUCOSE'],
    ['g9-t5-1', '1.4: ABSORPTION OF FATTY ACIDS AND GLYCEROL'],
    ['g9-t5-1', '1.5: LARGE INTESTINE'],
    ['g9-t5-1', 'OBJECTIVE QUESTIONS'],
    ['g9-t5-2', 'UNIT 2: THE RESPIRATORY SYSTEM'],
    ['g9-t5-2', '2.1: MEANING AND IMPORTANCE'],
    ['g9-t5-2', '2.2: SUMMARY OUTLINE OF RESPIRATION'],
    ['g9-t5-2', '2.3: BRIEF OUTLINE OF EXTERNAL RESPIRATION'],
    ['g9-t5-2', '2.4. THE HUMAN RESPIRATORY SYSTEM (THE LUNGS)'],
    ['g9-t5-2', 'SUMMARY THE MECHANISM OF BREATHING'],
    ['g9-t5-2', '2.6: GASEOUS EXCHANGE AND TRANSPORT OF GASES'],
    ['g9-t5-2', '2.7. Experiment on Respiration'],
    ['g9-t5-2', '2.8: BRIEF OUTLINE OF INTERNAL OR TISSUE RESPIRATION'],
    ['g9-t5-2', 'SOME DISEASES OF THE RESPIRATORY SYSTEM'],
    ['g9-t5-2', '2.9: DIFFERENCES BETWEEN PHOTOSYNTHESIS AND RESPIRATION'],
    ['g9-t5-2', 'REVISION ESSAY QUESTIONS'],
    ['g9-t5-2', 'OBJECTIVE QUESTIONS'],
    ['g9-t5-3', 'UNIT 3.0: THE EXCRETORY SYSTEMS'],
    ['g9-t5-3', '3.0: MEANING AND IMPORTANCE OF EXCRETION'],
    ['g9-t5-3', '3.1: HUMAN EXCRETORY ORGANS'],
    ['g9-t5-3', '3.1.1: THE KIDNEYS (URINARY SYSTEM)'],
    ['g9-t5-3', 'STRUCTURE AND FUNCTIONS OF THE NEPHRONS'],
    ['g9-t5-3', 'FORMATION OF URINE'],
    ['g9-t5-3', '3.1.2: THE STRUCTURE OF THE HUMAN SKIN'],
    ['g9-t5-3', 'GENERAL FUNCTIONS OF THE SKIN'],
    ['g9-t5-3', 'HOW TO REGULATE BODY TEMPERATURE'],
    ['g9-t5-3', 'CARE OF THE SKIN'],
    ['g9-t5-3', 'REVISION ESSAY QUESTIONS'],
    ['g9-t5-3', 'OBJECTIVE QUESTIONS'],
    ['g9-t5-4', 'UNIT 4.0: BLOOD CIRCULATORY SYSTEM'],
    ['g9-t5-4', '4.1: INTRODUCTION'],
    ['g9-t5-4', '4.2: BLOOD AND ITS COMPOSITION'],
    ['g9-t5-4', '4.4: PLASMA'],
    ['g9-t5-4', '4.5: GENERAL FUNCTIONS OF BLOOD'],
    ['g9-t5-4', '4.6: BLOOD VESSELS'],
    ['g9-t5-4', '4.7: THE STRUCTURE OF THE MAMMALIAN HEART'],
    ['g9-t5-4', 'REVISION ESSAY QUESTIONS'],
    ['g9-t5-4', 'OBJECTIVE QUESTIONS'],
    ['g9-t5-5', 'UNIT 5.0: THE HUMAN REPRODUCTIVE SYSTEMS'],
    ['g9-t5-5', '5.3: SEXUAL CYCLE IN FEMALES (OVULATION AND MENSTRUATION)'],
    ['g9-t5-5', '5.4: BRIEF OUTLINE OF SEQUENCE OF EVENTS IN SEXUAL REPRODUCTION'],
    ['g9-t5-5', 'EASSAY REVISION QUESTIONS'],
    ['g9-t5-5', 'OBJECTIVE QUESTIONS'],
    ['g9-t5-6', 'UNIT 6: THE SKELETAL SYSTEM IN MAN'],
    ['g9-t5-6', '6.1: GENERAL FUNCTIONS OF THE SKELETON']
];

// Topics the textbook covers that are not in the syllabus book.
const EXTRA_TOPICS = {
    'g7-t1-rev': { theme: 'g7-t1', title: 'Revision Questions — Themes 1 and 2', icon: '📝' },
    'g7-t1-rev2': { theme: 'g7-t1', title: 'Revision Questions — Measurement of Motion', icon: '📝' },
    'g7-t2-rev': { theme: 'g7-t2', title: 'Revision Questions — States of Matter', icon: '📝' },
    'g7-t2-rev2': { theme: 'g7-t2', title: 'Revision Questions — Forces and Energy', icon: '📝' },
    'g7-t2-energy': { theme: 'g7-t2', title: 'Energy: Potential and Kinetic Energy', icon: '⚡' },
    'g7-t3-rev': { theme: 'g7-t3', title: 'Revision Questions — Chemical Changes 1', icon: '📝' },
    'g7-t5-rev': { theme: 'g7-t5', title: 'Revision Questions — Ecology 1', icon: '📝' },
    'g7-t6-rev': { theme: 'g7-t6', title: 'Revision Questions — Food Part 1', icon: '📝' },
    'g7-t7-rev': { theme: 'g7-t7', title: 'Revision Questions — Sense Organs', icon: '📝' },
    'g8-t1-rev': { theme: 'g8-t1', title: 'Revision Questions — Invertebrates', icon: '📝' },
    'g8-t2-rev': { theme: 'g8-t2', title: 'Revision Questions — Matter Part 2', icon: '📝' }
};

/* ------------------------------------------------------------------ *
 * Skeleton: the syllabus structure (grade -> theme -> unit -> page)
 * comes from data/science-book.js so both books share the same
 * navigation and the same quiz topic keys.
 * ------------------------------------------------------------------ */
function loadScienceBookSkeleton() {
    const src = fs.readFileSync(path.join(ROOT, 'data', 'science-book.js'), 'utf8');
    const win = {};
    new Function('window', src)(win);
    return win.scienceBook || [];
}

/* ------------------------------------------------------------------ *
 * Anchor resolution
 * ------------------------------------------------------------------ */
function resolveAnchors(blocks) {
    const resolved = [];
    const problems = [];
    const fuzzy = [];
    let from = 0;
    ANCHORS.forEach((entry) => {
        const [topicId, text] = entry;
        const key = normKey(text);
        let found = -1;
        for (let i = from; i < blocks.length; i++) {
            const b = blocks[i];
            if (!b.text) continue;
            const bk = normKey(b.text.replace(/^#+\s*/, '').replace(/^[-•*]\s*/, ''));
            if (!bk) continue;
            if (bk === key || bk.startsWith(key + ' ') || bk.startsWith(key)) {
                found = i;
                break;
            }
        }
        if (found < 0) {
            // the textbook has typos, so fall back to the closest heading
            const near = fuzzyMatch(blocks, from, key);
            if (near >= 0) {
                found = near;
                fuzzy.push(topicId + ' :: ' + text + '  ->  ' + blocks[near].text.slice(0, 70));
            }
        }
        if (found < 0) {
            problems.push(topicId + ' :: ' + text);
            return;
        }
        from = found + 1;
        resolved.push({ topic: topicId, text, index: found });
    });
    return { resolved, problems, fuzzy };
}

// Token overlap between the anchor and the start of a block.
function tokenSim(a, b) {
    const at = a.split(' ').filter(Boolean);
    const bt = b.split(' ').filter(Boolean);
    if (!at.length) return 0;
    let hits = 0;
    at.forEach((w) => { if (w.length > 2 && bt.includes(w)) hits++; });
    return hits / at.length;
}

function fuzzyMatch(blocks, from, key) {
    const keyTokens = key.split(' ').filter(Boolean);
    for (let i = from; i < blocks.length; i++) {
        const b = blocks[i];
        if (!b.text) continue;
        const bk = normKey(b.text.replace(/^#+\s*/, '').replace(/^[-•*]\s*/, ''));
        if (!bk) continue;
        const bt = bk.split(' ');
        if (Math.abs(bt.length - keyTokens.length) > 4) continue;
        if (tokenSim(key, bk) >= 0.85) return i;
    }
    return -1;
}

/* ------------------------------------------------------------------ *
 * Sections
 * ------------------------------------------------------------------ */
function blockToBlocks(block, ctx) {
    const out = [];
    const text = (block.text || '').trim();
    if (text) {
        if (/^\|/.test(text)) {
            const rows = parsePipeRow(text);
            if (rows) {
                if (ctx.table) ctx.table.rows.push(rows);
                else { ctx.table = { t: 'table', rows: [rows] }; out.push(ctx.table); }
            }
        } else {
            ctx.table = null;
            const bullet = text.match(/^[-•*]\s+(.*)$/);
            const numbered = text.match(/^(\d+)[.)]\s+(.*)$/);
            if (block.latex && text.length <= 140) out.push({ t: 'formula', x: text });
            else if (bullet) out.push({ t: 'ul', items: [tidyMath(bullet[1])] });
            else if (numbered) out.push({ t: 'ol', items: [tidyMath(numbered[2])] });
            else out.push({ t: 'p', x: text });
        }
    }
    block.images.forEach((img) => {
        ctx.table = null;
        out.push({ t: 'img', src: img.src, alt: img.alt || '' });
    });
    return out;
}

function parsePipeRow(line) {
    let s = line.trim();
    if (s.startsWith('|')) s = s.slice(1);
    if (s.endsWith('|')) s = s.slice(0, -1);
    const cells = s.split('|').map((c) => c.trim());
    // drop the "--- | ---" separator row
    if (cells.every((c) => /^-{2,}$/.test(c))) return null;
    return cells;
}

function mergeListBlocks(blocks) {
    const out = [];
    blocks.forEach(b => {
        const last = out[out.length - 1];
        if ((b.t === 'ul' || b.t === 'ol') && last && last.t === b.t) {
            b.items.forEach(item => { if (item && !last.items.includes(item)) last.items.push(item); });
            return;
        }
        out.push(b);
    });
    return out;
}

// Build the sections of one topic from a run of consecutive anchors.
function sectionsForRun(blocks, run, endIndex) {
    const sections = [];
    run.forEach((anchor, k) => {
        const start = anchor.index;
        const stop = k + 1 < run.length ? run[k + 1].index : endIndex;
        const section = { h: prettyHeading(anchor.text), blocks: [] };
        const ctx = { table: null };
        // the anchor paragraph itself: heading text plus any trailing sentence
        const first = blocks[start];
        let rest = '';
        if (first && first.text) {
            const raw = first.text.replace(/^#+\s*/, '');
            const idx = normKey(raw).indexOf(normKey(anchor.text));
            if (idx >= 0) {
                // find the character offset of the matched prefix in the raw text
                let chars = 0;
                let count = 0;
                for (let c = 0; c < raw.length; c++) {
                    if (/[a-z0-9]/.test(raw[c].toLowerCase())) count++;
                    if (count > normKey(anchor.text).replace(/[^a-z0-9]/g, '').length) break;
                    chars = c + 1;
                }
                rest = raw.slice(chars).replace(/^[\s:.\-–—,]+/, '').trim();
            }
        }
        if (rest) {
            // the textbook often repeats the first sentence of a unit in the
            // heading paragraph - drop that fragment when the next paragraph
            // starts with the same words.
            const words = rest.split(/\s+/).slice(0, 5).join(' ').toLowerCase();
            let nextText = '';
            for (let j = start + 1; j < stop; j++) {
                if (blocks[j].text.trim()) { nextText = blocks[j].text.toLowerCase().replace(/\s+/g, ' ').trim(); break; }
            }
            const duplicated = words.length > 8 && nextText.indexOf(words) === 0;
            if (!duplicated) section.blocks.push({ t: 'p', x: rest });
        }
        for (let i = start + 1; i < stop; i++) {
            section.blocks.push(...blockToBlocks(blocks[i], ctx));
        }
        if (section.blocks.length) sections.push({ h: section.h, blocks: mergeListBlocks(section.blocks) });
    });
    return sections;
}

/* ------------------------------------------------------------------ *
 * Figures
 * ------------------------------------------------------------------ */
const PY_OPTIMISE = `
import sys, os
from PIL import Image
MAX_W, MAX_H = 950, 1200
for path in sys.argv[1:]:
    try:
        im = Image.open(path)
        im.load()
    except Exception as e:
        print('skip', path, e); continue
    if im.mode not in ('RGB', 'RGBA', 'P', 'L'):
        im = im.convert('RGBA')
    if im.width > MAX_W or im.height > MAX_H:
        scale = min(MAX_W / im.width, MAX_H / im.height)
        im = im.resize((max(1, int(im.width * scale)), max(1, int(im.height * scale))), Image.LANCZOS)
    if im.mode in ('RGBA', 'LA', 'P'):
        if im.mode == 'P':
            im = im.convert('RGBA')
        im = im.convert('RGBA')
        alpha = im.getchannel('A')
        if alpha.getextrema()[0] == 255:
            im = im.convert('RGB')
    if im.mode == 'RGB':
        im = im.convert('P', palette=Image.ADAPTIVE, colors=192)
    elif im.mode == 'RGBA':
        im = im.convert('P', palette=Image.ADAPTIVE, colors=192)
        im = im.convert('RGBA')
    im.save(path, optimize=True)
`;

function optimiseFigures(files) {
    if (!files.length) return false;
    const py = process.env.PYTHON || (process.env.LOCALAPPDATA ? path.join(process.env.LOCALAPPDATA, 'Programs', 'Python', 'Python314', 'python.exe') : 'python');
    let exe = null;
    for (const cand of [py, 'python', 'python3', 'py']) {
        if (!cand) continue;
        const r = spawnSync(cand, ['-c', 'import PIL;print(PIL.__version__)'], { encoding: 'utf8' });
        if (r.status === 0) { exe = cand; break; }
    }
    if (!exe) {
        console.warn('! Pillow not available - figures copied without resizing');
        return false;
    }
    const tmp = path.join(require('os').tmpdir(), 'fs_optimise_' + process.pid + '.py');
    fs.writeFileSync(tmp, PY_OPTIMISE);
    const r = spawnSync(exe, [tmp].concat(files), { encoding: 'utf8' });
    fs.unlinkSync(tmp);
    if (r.status !== 0) {
        console.warn('! image optimisation failed: ' + (r.stderr || '').trim());
        return false;
    }
    return true;
}

/* ------------------------------------------------------------------ *
 * Main
 * ------------------------------------------------------------------ */
function main() {
    if (!fs.existsSync(ODT)) {
        console.error('source textbook not found: ' + ODT);
        process.exit(1);
    }
    const zip = readZip(ODT);
    const contentXml = zip.read('content.xml').toString('utf8');
    const blocks = extractBlocks(contentXml);

    if (FIND) {
        const re = new RegExp(FIND, 'i');
        blocks.forEach((b, i) => {
            if (re.test(b.text)) console.log(String(i).padStart(5) + ' | ' + b.text.slice(0, 160));
        });
        return;
    }

    if (DUMP_ONLY) {
        blocks.forEach((b, i) => {
            if (b.heading) console.log(String(i).padStart(4) + ' H ' + b.text);
            else if (b.images.length) console.log(String(i).padStart(4) + ' I ' + b.images.map((x) => x.file).join(','));
        });
        console.log('blocks: ' + blocks.length);
        return;
    }

    /* ---- anchors ---- */
    const { resolved, problems, fuzzy } = resolveAnchors(blocks);
    if (problems.length) {
        console.warn('! anchors not found (' + problems.length + '):');
        problems.forEach((p) => console.warn('    ' + p));
    }
    if (fuzzy && fuzzy.length) {
        console.warn('! anchors matched loosely (' + fuzzy.length + '):');
        fuzzy.forEach((p) => console.warn('    ' + p));
    }

    /* ---- figures ---- */
    const pictureFiles = zip.list().filter((n) => /^Pictures\/.+\.png$/i.test(n));
    fs.mkdirSync(OUT_IMG_DIR, { recursive: true });
    // drop figures from an older build so the folder only holds current ones
    fs.readdirSync(OUT_IMG_DIR).filter((f) => /\.png$/i.test(f)).forEach((f) => {
        try { fs.unlinkSync(path.join(OUT_IMG_DIR, f)); } catch (_) {}
    });
    const usedNames = new Map();
    const figureInfo = new Map(); // picture file -> { src, alt }
    // nearest heading before/after each picture gives the file a friendly name
    const headingBefore = [];
    let lastHeading = '';
    blocks.forEach((b) => {
        if (b.heading && b.text) lastHeading = b.text.replace(/^#+\s*/, '').trim();
        headingBefore.push(lastHeading);
    });
    const written = [];
    pictureFiles.forEach((name) => {
        const file = name.split('/').pop();
        // the block that uses this picture
        let blockIndex = blocks.findIndex((b) => b.images.some((im) => im.file === name));
        let caption = headingBefore[blockIndex] || '';
        // prefer a following "Figure ..." caption
        for (let i = blockIndex + 1; i < Math.min(blockIndex + 8, blocks.length); i++) {
            const t = blocks[i].text.replace(/^#+\s*/, '').trim();
            if (/^figure\b/i.test(t)) { caption = t; break; }
            if (blocks[i].heading && !/^figure\b/i.test(t)) break;
        }
        let base = slug(caption.replace(/^figure\s*[\d.]*\s*:?\s*/i, '').replace(/[:\s]+$/, ''), 40);
        if (!base || base === 'figure') base = slug(file.replace(/\.png$/i, ''), 40);
        const n = (usedNames.get(base) || 0) + 1;
        usedNames.set(base, n);
        const outName = n > 1 ? base + '-' + n + '.png' : base + '.png';
        const out = path.join(OUT_IMG_DIR, outName);
        fs.writeFileSync(out, zip.read(name));
        written.push(out);
        const img = (blocks[blockIndex].images.find((im) => im.file === name)) || {};
        figureInfo.set(name, {
            src: 'images/foundation-science/' + outName,
            alt: img.title || img.descr || caption
        });
    });
    blocks.forEach((b) => {
        b.images.forEach((img) => {
            const info = figureInfo.get(img.file);
            if (info) { img.src = info.src; img.alt = info.alt; }
        });
    });
    const optimised = optimiseFigures(written);

    /* ---- skeleton ---- */
    const skeleton = loadScienceBookSkeleton();

    // group resolved anchors into runs of consecutive same-topic anchors
    const runs = [];
    resolved.forEach((a) => {
        const last = runs[runs.length - 1];
        if (last && last.topic === a.topic) last.items.push(a);
        else runs.push({ topic: a.topic, items: [a] });
    });

    // map topic id -> list of runs (document order)
    const topicRuns = new Map();
    runs.forEach((run) => {
        if (!topicRuns.has(run.topic)) topicRuns.set(run.topic, []);
        topicRuns.get(run.topic).push(run);
    });

    // end index of a run = the index of the anchor that follows it
    const runEnd = new Map();
    runs.forEach((run, i) => {
        const next = resolved[runs.slice(0, i).reduce((a, r) => a + r.items.length, 0) + run.items.length];
        runEnd.set(run, next ? next.index : blocks.length);
    });

    const buildSectionsFor = (topicId) => {
        const list = topicRuns.get(topicId) || [];
        const sections = [];
        list.forEach((run) => {
            sections.push(...sectionsForRun(blocks, run.items, runEnd.get(run)));
        });
        return sections;
    };

    /* ---- assemble the book ---- */
    const quizTopics = loadQuizTopics();

    const book = skeleton.map((grade) => {
        const themes = (grade.themes || []).map((theme) => {
            const skeletonTopics = (theme.topics || []).map((t) => ({
                id: t.id,
                unit: t.unit || '',
                page: t.page || '',
                title: t.title,
                icon: t.icon || '📘',
                quizTopic: quizTopics.has(t.title) ? t.title : '',
                extra: false
            }));
            // extra textbook-only topics inserted at their position in the book
            const extras = Object.keys(EXTRA_TOPICS)
                .filter((id) => EXTRA_TOPICS[id].theme === theme.id && topicRuns.has(id))
                .map((id) => ({
                    id,
                    unit: '',
                    page: '',
                    title: EXTRA_TOPICS[id].title,
                    icon: EXTRA_TOPICS[id].icon || '📘',
                    quizTopic: '',
                    extra: true,
                    order: topicRuns.get(id)[0].items[0].index
                }));
            const all = skeletonTopics
                .map((t) => ({ ...t, order: topicRuns.has(t.id) ? topicRuns.get(t.id)[0].items[0].index : Number.MAX_SAFE_INTEGER }))
                .concat(extras);
            all.sort((a, b) => a.order - b.order);

            return {
                id: theme.id,
                number: theme.number || '',
                title: theme.title,
                topics: all.map((t) => {
                    const sections = buildSectionsFor(t.id);
                    return {
                        id: t.id,
                        unit: t.unit,
                        page: t.page,
                        title: t.title,
                        icon: t.icon,
                        quizTopic: t.quizTopic,
                        source: sections.length ? 'textbook' : 'todo',
                        sections
                    };
                })
            };
        });
        return {
            id: grade.id,
            grade: grade.grade,
            label: 'Foundation Science — ' + (grade.grade || ''),
            icon: { 'Grade 7': '7️⃣', 'Grade 8': '8️⃣', 'Grade 9': '9️⃣' }[grade.grade] || '📘',
            blurb: 'The official Foundation Science textbook, read unit by unit with the diagrams and worked examples from the book.',
            themes
        };
    });

    const out = [
        '// Tech Monster - Foundation Science Textbook book.',
        '// Generated from data/Foundation SCIENCE/foundation science.odt by build_foundation_science.cjs.',
        '// Full textbook reading copy (paragraphs, lists, tables and figures) for Grades 7-9.',
        '// source "todo" means the supplied sample file has no text for that unit yet -',
        '// add your notes in data/foundation-science-notes.js (never edit this file).',
        '// Do not hand-edit; rebuild with: node build_foundation_science.cjs',
        'window.foundationScienceBook = ' + JSON.stringify(book, null, 1) + ';',
        ''
    ].join('\n');
    fs.writeFileSync(OUT_JS, out);

    /* ---- report ---- */
    let withText = 0;
    let without = 0;
    const missing = [];
    book.forEach((g) => g.themes.forEach((th) => th.topics.forEach((t) => {
        if (t.sections.length) withText++;
        else { without++; if (!t.extra) missing.push(g.grade + ' ' + t.id + ' ' + t.title); }
    })));
    console.log('wrote ' + path.relative(ROOT, OUT_JS) + ' (' + Math.round(fs.statSync(OUT_JS).size / 1024) + ' KB)');
    console.log('figures: ' + pictureFiles.length + ' copied' + (optimised ? ' and optimised' : ''));
    console.log('topics with textbook text: ' + withText + ', still to be written: ' + without);
    if (missing.length) {
        console.log('units without textbook text:');
        missing.forEach((m) => console.log('    - ' + m));
    }
}

function loadQuizTopics() {
    try {
        const src = fs.readFileSync(path.join(ROOT, 'data', 'questions-science.js'), 'utf8');
        const arr = eval(src + '; ScienceQuestions');
        const set = new Set();
        arr.forEach((q) => set.add(q.topic));
        return set;
    } catch (e) {
        console.warn('! could not read quiz topics: ' + e.message);
        return new Set();
    }
}

module.exports = { extractBlocks, readZip, resolveAnchors, prettyHeading, normKey };

if (require.main === module) main();
