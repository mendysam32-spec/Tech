import { json, parseJson } from "./_utils.js";
const DEFAULT_CONFIG = { appName: "Tech Monster", certificateTitle: "Certificate of Achievement", passingScore: 70, announcement: "Build your account, unlock rewards, and master technical drawing." };
export async function onRequestGet({ env }) { try { const row = await env.DB.prepare("SELECT value FROM app_config WHERE key = 'main'").first(); return json({ config: { ...DEFAULT_CONFIG, ...parseJson(row?.value, {}) } }); } catch (_) { return json({ config: DEFAULT_CONFIG }); } }
