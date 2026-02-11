$files = @(
    "Module1_Fundamentals\IntroductionToWatermarking.html",
    "Module1_Fundamentals\TechnicalFoundations.html",
    "Module1_Fundamentals\WatermarkingApproaches.html",
    "Module2_TextWatermarking\TextWatermarkingFundamentals.html",
    "Module2_TextWatermarking\DetectionAdvancedTechniques.html",
    "Module3_ImageWatermarking\ImageWatermarkingFundamentals.html",
    "Module3_ImageWatermarking\ContentProvenanceBestPractices.html",
    "Assessment1\assessment.html",
    "Assessment2\assessment.html",
    "Assessment3\assessment.html",
    "FinalAssessment\assessment.html"
)

$metaTags = @"
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
"@

foreach ($file in $files) {
    $path = "C:\Users\Lenovo\Documents\nginx-1.28.0\nginx-1.28.0\html\Courses\AI_Watermarking_Course\$file"
    if (Test-Path $path) {
        $content = Get-Content $path -Raw
        if ($content -notmatch 'viewport') {
            $content = $content -replace '(<head>)', "`$1`n$metaTags"
            Set-Content $path $content -NoNewline
            Write-Host "Updated: $file"
        }
    }
}
