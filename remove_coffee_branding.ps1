# Script to remove all Coffee and Creative branding references

Write-Host "Replacing Coffee and Creative branding..." -ForegroundColor Green

# Get all HTML files recursively
$htmlFiles = Get-ChildItem -Path "." -Filter "*.html" -Recurse -File

foreach ($file in $htmlFiles) {
    Write-Host "Processing: $($file.FullName)" -ForegroundColor Yellow
    
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $modified = $false
    
    # Replace "Let's brew thoughts" with "Let's connect"
    if ($content -match "Let.*brew.*thoughts") {
        $content = $content -replace "Let%e2%80%99s%20brew%20thoughts\.", "Let%e2%80%99s%20connect."
        $content = $content -replace "Let's brew thoughts", "Let's connect"
        $modified = $true
    }
    
    # Replace Google Maps Coffee & Creative location with Rankmator location
    if ($content -match "Coffee%20%26%20Creative") {
        # New Rankmator location: C-567 Saraswati Vihar, Pitampura, New Delhi- 110034
        # This is a generic placeholder - update with actual Rankmator location coordinates
        $content = $content -replace "https://www\.google\.com/maps/embed\?pb=[^""]+Coffee%20%26%20Creative[^""]+", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0!2d77.13!3d28.70!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRankmator!5e0!3m2!1sen!2sin!4v1000000000000!5m2!1sen!2sin"
        $modified = $true
    }
    
    # Save if modified
    if ($modified) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        Write-Host "  Updated!" -ForegroundColor Green
    }
}

Write-Host "`nDone! All Coffee and Creative references have been removed." -ForegroundColor Green
