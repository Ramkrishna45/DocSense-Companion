# DocSense Companion

DocSense Companion is a powerful Chrome Extension that acts as a bridge between your browser and the [DocSense AI](https://github.com/Ramkrishna45/DocSense-AI) backend. It allows you to instantly capture web pages, select text excerpts, and save them directly into your DocSense AI collections for later searching, reading, and querying via AI.

## ✨ Features

- **Full Page Capture**: Instantly save the main content of any article, blog post, or documentation page. The extension automatically extracts readable text and strips out clutter.
- **Selection Capture**: Highlight specific paragraphs or sentences on a page, and a quick-save floating button will appear. Save only what matters.
- **Collection Management**: Choose which DocSense AI collection you want to save your captured documents to directly from the extension UI.
- **Quick Search**: Search through your saved documents instantly from the browser extension popup.
- **Floating UI Assistant**: A subtle floating button appears on web pages to quickly trigger captures without leaving your current context.
- **Dark Mode Support**: Sleek, modern UI with a gorgeous dark aesthetic that matches the main DocSense AI dashboard.

## 🚀 Installation (Developer Mode)

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ramkrishna45/DocSense-Companion.git
   cd DocSense-Companion
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the extension**
   ```bash
   npm run build
   ```
   This will generate a `dist` folder containing the compiled extension files.

4. **Load into Chrome**
   - Open Google Chrome and navigate to `chrome://extensions/`
   - Enable **Developer mode** using the toggle switch in the top right corner.
   - Click the **Load unpacked** button in the top left.
   - Select the `dist` folder that was created in step 3.

## ⚙️ Configuration

By default, the extension connects to the production DocSense AI backend. 
If you are running the backend locally and wish to connect the extension to your local instance:

1. Click the extension icon in the Chrome toolbar.
2. Click the **Settings** (gear) icon in the popup.
3. Update the **Backend URL** to your local server (e.g., `http://localhost:10000`).
4. Click **Save Settings**.

## 🛠️ Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite (with custom Rollup configuration for Chrome Extensions)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React

## 📁 Project Structure

- `src/popup/` - React application for the extension popup UI.
- `src/background/` - Service worker for background tasks and API communication.
- `src/content/` - Content scripts injected into web pages (handles text selection, floating UI, and page extraction).
- `src/components/` - Reusable UI components used across the popup.
- `src/services/` - API client and storage wrappers.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
