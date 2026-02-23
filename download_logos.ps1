$dest = "C:\Users\Matth\OneDrive - Matthew Cicanese LLC\Desktop\New Fine Art Site\MC-Fine-Art-FEB-2026---NEW-\public\logos"

# Canon
Invoke-WebRequest -Uri "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Canon_wordmark.svg/1280px-Canon_wordmark.svg.png" -OutFile "$dest\canon.png" -UseBasicParsing

# National Geographic
Invoke-WebRequest -Uri "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/National_Geographic_Logo.svg/1280px-National_Geographic_Logo.svg.png" -OutFile "$dest\national-geographic.png" -UseBasicParsing

# Tampa International Airport
Invoke-WebRequest -Uri "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Tampa_International_Airport_Logo.svg/1280px-Tampa_International_Airport_Logo.svg.png" -OutFile "$dest\tampa-airport.png" -UseBasicParsing

Write-Host "Done downloading logos."
