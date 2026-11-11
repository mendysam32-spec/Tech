Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$sourcePath = Join-Path $root "build\icon.png"
$res = Join-Path $root "android\app\src\main\res"
$source = [System.Drawing.Image]::FromFile($sourcePath)
$background = [System.Drawing.ColorTranslator]::FromHtml("#0f172a")

function New-IconBitmap([int]$size, [bool]$circle) {
    $bitmap = New-Object System.Drawing.Bitmap $size, $size
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.Clear([System.Drawing.Color]::Transparent)
    if ($circle) {
        $path = New-Object System.Drawing.Drawing2D.GraphicsPath
        $path.AddEllipse(0, 0, $size, $size)
        $graphics.SetClip($path)
    }
    $graphics.DrawImage($source, 0, 0, $size, $size)
    $graphics.Dispose()
    return $bitmap
}

function New-ForegroundBitmap([int]$size) {
    $bitmap = New-Object System.Drawing.Bitmap $size, $size
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.Clear([System.Drawing.Color]::Transparent)
    $inner = [int]($size * 0.62)
    $offset = [int](($size - $inner) / 2)
    $graphics.DrawImage($source, $offset, $offset, $inner, $inner)
    $graphics.Dispose()
    return $bitmap
}

function New-SplashBitmap([int]$width, [int]$height) {
    $bitmap = New-Object System.Drawing.Bitmap $width, $height
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.Clear($background)
    $inner = [int]([Math]::Min($width, $height) * 0.34)
    $x = [int](($width - $inner) / 2)
    $y = [int](($height - $inner) / 2)
    $graphics.DrawImage($source, $x, $y, $inner, $inner)
    $graphics.Dispose()
    return $bitmap
}

$legacySizes = @{ "mdpi" = 48; "hdpi" = 72; "xhdpi" = 96; "xxhdpi" = 144; "xxxhdpi" = 192 }
foreach ($density in $legacySizes.Keys) {
    $dir = Join-Path $res "mipmap-$density"
    $size = $legacySizes[$density]
    $icon = New-IconBitmap $size $false
    $icon.Save((Join-Path $dir "ic_launcher.png"), [System.Drawing.Imaging.ImageFormat]::Png)
    $icon.Dispose()
    $round = New-IconBitmap $size $true
    $round.Save((Join-Path $dir "ic_launcher_round.png"), [System.Drawing.Imaging.ImageFormat]::Png)
    $round.Dispose()
    $foreground = New-ForegroundBitmap ([int]($size * 2.25))
    $foreground.Save((Join-Path $dir "ic_launcher_foreground.png"), [System.Drawing.Imaging.ImageFormat]::Png)
    $foreground.Dispose()
}

$splashes = @(
    @{ Dir = "drawable"; Width = 480; Height = 800 },
    @{ Dir = "drawable-port-mdpi"; Width = 320; Height = 480 },
    @{ Dir = "drawable-port-hdpi"; Width = 480; Height = 800 },
    @{ Dir = "drawable-port-xhdpi"; Width = 720; Height = 1280 },
    @{ Dir = "drawable-port-xxhdpi"; Width = 960; Height = 1600 },
    @{ Dir = "drawable-port-xxxhdpi"; Width = 1280; Height = 1920 },
    @{ Dir = "drawable-land-mdpi"; Width = 480; Height = 320 },
    @{ Dir = "drawable-land-hdpi"; Width = 800; Height = 480 },
    @{ Dir = "drawable-land-xhdpi"; Width = 1280; Height = 720 },
    @{ Dir = "drawable-land-xxhdpi"; Width = 1600; Height = 960 },
    @{ Dir = "drawable-land-xxxhdpi"; Width = 1920; Height = 1280 }
)
foreach ($splash in $splashes) {
    $file = Join-Path (Join-Path $res $splash.Dir) "splash.png"
    $bitmap = New-SplashBitmap $splash.Width $splash.Height
    $bitmap.Save($file, [System.Drawing.Imaging.ImageFormat]::Png)
    $bitmap.Dispose()
}

$source.Dispose()
Write-Output "Android launcher icons and splash screens generated from build/icon.png."
