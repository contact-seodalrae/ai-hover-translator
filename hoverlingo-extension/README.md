# HoverLingo Extension

AI-powered hover translator for text and images.

## Features

- Hover text translation
- OCR image translation
- Floating tooltip UI
- Multi-language support
- Chrome Extension support

## Tech Stack

- React
- Vite
- TailwindCSS
- Tesseract.js
- Chrome Extension Manifest V3
- Google Translate API / OpenAI API / LibreTranslate

## Setup API Keys

1. For Google Translate: Get API key from [Google Cloud Console](https://console.cloud.google.com/)
2. For OpenAI: Get API key from [OpenAI](https://platform.openai.com/)
3. Update the API keys in the respective service files or use environment variables

## Installation

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Load Extension

1. Open `chrome://extensions`
2. Enable Developer Mode
3. Click `Load unpacked`
4. Select `dist/` folder

## License

MIT