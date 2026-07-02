import fs from 'fs';
import { Jimp } from 'jimp';

async function processImage() {
  const svgContent = fs.readFileSync('src/assets/extension_logo.svg', 'utf8');
  
  // Extract base64
  const match = svgContent.match(/base64,([^"]+)"/);
  if (!match) {
    console.error("No base64 found in SVG");
    return;
  }
  
  const base64Data = match[1];
  const buffer = Buffer.from(base64Data, 'base64');
  
  try {
    const image = await Jimp.read(buffer);
    
    // Autocrop crops transparent edges
    image.autocrop();
    
    // Save to a new PNG file
    await image.write('src/assets/extension_logo_cropped.png');
    console.log("Successfully cropped and saved to extension_logo_cropped.png");
  } catch (err) {
    console.error("Error processing image:", err);
  }
}

processImage();
