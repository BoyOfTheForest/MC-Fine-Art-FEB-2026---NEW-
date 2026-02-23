$images = @(
    @{ Name="Earth-Up-Close"; Url="https://cicanese.my.canva.site/art/_assets/media/084e8cdec801c84371f6ba94d5df4000.jpg" },
    @{ Name="Ghosts"; Url="https://cicanese.my.canva.site/art/_assets/media/aad892e5eba653ffd6386c355ea82d63.jpg" },
    @{ Name="Dilmah-Conservation"; Url="https://cicanese.my.canva.site/art/_assets/media/a5970cb72dcdd52a108f0e1e413b9087.jpg" },
    @{ Name="The-Digital-Dialogs"; Url="https://cicanese.my.canva.site/art/_assets/media/9c5d799ec66e2bebb58b211494dfb632.jpg" },
    @{ Name="Momento-Mori"; Url="https://cicanese.my.canva.site/art/_assets/media/5b197909a005c10a51b538d2a7a70009.jpg" }
)

$downloadDir = "public\Images\Collections"
if (-Not (Test-Path $downloadDir)) {
    New-Item -ItemType Directory -Force -Path $downloadDir | Out-Null
}

foreach ($img in $images) {
    $outFile = Join-Path $downloadDir $($img.Name + ".jpg")
    try {
        Invoke-WebRequest -Uri $img.Url -OutFile $outFile
        Write-Host "Downloaded $($img.Name)"
    } catch {
        Write-Host "Failed to download $($img.Name): $_"
    }
}
