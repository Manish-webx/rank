$headScript = '    <script src="js/header-loader.js"></script>'
$navPlaceholder = '    <div id="header-include"></div>'

Write-Host 'Starting header replacement process...' -ForegroundColor Green

Get-ChildItem *.html | ForEach-Object {
    Write-Host "Processing $($_.Name)..." -ForegroundColor Cyan
    
    $content = Get-Content $_.FullName -Raw -Encoding UTF8
    $modified = $false
    
    # Check if the file already has header-loader.js
    $hasLoader = $content -match 'header-loader\.js'
    
    # Check if the file has hardcoded nav
    $hasNav = $content -match '<nav class="navbar navbar-universal'
    
    if ($hasNav) {
        # Remove the hardcoded nav block and replace with placeholder
        # Using regex to match the entire <nav>...</nav> block
        $newContent = $content -replace '(?s)\s*<nav class="navbar navbar-universal navbar-custom navbar-fixed-top">.*?</nav>', "`n$navPlaceholder"
        
        if ($newContent -ne $content) {
            $content = $newContent
            $modified = $true
            Write-Host '  - Replaced hardcoded nav with placeholder' -ForegroundColor Yellow
        }
    }
    
    # Add loader script to head if not present
    if (-not $hasLoader) {
        $content = $content -replace '</head>', "$headScript`n</head>"
        $modified = $true
        Write-Host '  - Added header-loader.js script' -ForegroundColor Yellow
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
Write-Host 'Header replacement complete!' -ForegroundColor Green
Write-Host 'All HTML files now use the shared header from js/header-loader.js' -ForegroundColor Green
