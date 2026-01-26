$footScript = '    <script src="js/footer-loader.js"></script>'
$footerPlaceholder = '    <div id="footer-include"></div>'

Write-Host 'Starting footer replacement process...' -ForegroundColor Green

Get-ChildItem *.html | ForEach-Object {
    Write-Host "Processing $($_.Name)..." -ForegroundColor Cyan
    
    $content = Get-Content $_.FullName -Raw -Encoding UTF8
    $modified = $false
    
    # Check if the file already has footer-loader.js
    $hasLoader = $content -match 'footer-loader\.js'
    
    # Check if the file has hardcoded footer section
    $hasFooter = $content -match '<section class="section-small footer'
    
    if ($hasFooter) {
        # Remove the hardcoded footer and WhatsApp widget, replace with placeholder
        # First remove footer section
        $newContent = $content -replace '(?s)\s*<!-- Footer Section -->.*?</section>', "`n$footerPlaceholder"
        
        # Then remove WhatsApp widget (the floating button)
        $newContent = $newContent -replace '(?s)\s*<a href="https://api\.whatsapp\.com/send\?phone=.*?</a>', ''
        
        if ($newContent -ne $content) {
            $content = $newContent
            $modified = $true
            Write-Host '  - Replaced hardcoded footer with placeholder' -ForegroundColor Yellow
        }
    }
    
    # Add loader script before closing body tag if not present
    if (-not $hasLoader) {
        $content = $content -replace '</body>', "$footScript`n</body>"
        $modified = $true
        Write-Host '  - Added footer-loader.js script' -ForegroundColor Yellow
    }
    
    if ($modified) {
        # Save with UTF-8 encoding (no BOM)
        $Utf8NoBomEncoding = New-Object System.Text.UTF8Encoding $False
        [System.IO.File]::WriteAllText($_.FullName, $content, $Utf8NoBomEncoding)
        Write-Host "  [OK] Saved $($_.Name)" -ForegroundColor Green
    } else {
        Write-Host '  - No changes needed' -ForegroundColor Gray
    }
}

Write-Host ''
Write-Host 'Footer replacement complete!' -ForegroundColor Green
Write-Host 'All HTML files now use the shared footer from js/footer-loader.js' -ForegroundColor Green
Write-Host 'Contact information updated: contact@rankmator.com, rankmator@gmail.com, +91 9560864432' -ForegroundColor Green
