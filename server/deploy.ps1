# Exit on error
$ErrorActionPreference = "Stop"

# Define URLs
$url1 = "https://github.com/Delpat-Tech/house_of_humanity.git"
$url2 = "https://github.com/Ashackq/hoh_server.git"

# Save current location
$startPath = Get-Location

# Step 1: Go to parent and pull from URL 1
Write-Host "`n Pulling from URL 1 (parent repo)..."
Set-Location ..
git remote set-url origin $url1
git pull origin main  # Change 'main' to 'master' if needed

# Step 2: Go into 'server' and pull from URL 2
Write-Host "`n Pulling from URL 2 (/server repo)..."
Set-Location server
git remote set-url origin $url2
git pull origin main  # Change 'main' to 'master' if needed

# Step 3: Commit and push any changes to URL 2
Write-Host "`n Staging and pushing changes to URL 2..."
git add .
git commit -m "Sync changes from parent repo"
git push origin main  # Change 'main' if needed

# Done
Write-Host "`n Done! Changes pulled from URL 1 and pushed to URL 2."

# Optional: return to original location
Set-Location $startPath
