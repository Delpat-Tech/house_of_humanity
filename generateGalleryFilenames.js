const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, 'client', 'public', 'Gallery');

fs.readdir(galleryDir, (err, files) => {
  if (err) {
    console.error('Error reading Gallery directory:', err);
    return;
  }
  // Filter for image files (add more extensions if needed)
  const imageFiles = files.filter(file =>
    /\.(webp|jpg|jpeg|png|gif)$/i.test(file)
  );
  // Remove duplicates (case-insensitive)
  const uniqueFiles = Array.from(new Set(imageFiles.map(f => f.toLowerCase())))
    .map(lower => imageFiles.find(f => f.toLowerCase() === lower));
  // Output as a JS array
  const arrayString = `const galleryFilenames = [\n  ${uniqueFiles.map(f => `"${f}"`).join(',\n  ')}\n];`;
  console.log(arrayString);
}); 