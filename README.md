# HoverLingo

Instantly translate text and images by hovering.

---

# Preview

Hover any text or image on a webpage and instantly see the translation in your preferred language.

Perfect for:
- manga
- anime websites
- subtitles
- foreign blogs
- documentation
- social media
- PDFs rendered in browser

---

# Features

## Text Hover Translation
Hover over text and automatically translate it.

## OCR Image Translation
Extract and translate text from images using OCR.

## Floating Tooltip UI
Minimal cinematic tooltip interface.

## Multi-language Support
Choose your preferred language instantly.

## AI Enhanced Translation
Optional AI contextual translation.

## Lightweight UX
Fast and distraction-free experience.

---

# Screenshots

## Hover Translation

Add screenshot here

---

## OCR Translation

Add screenshot here

---

# Tech Stack

- React
- Vite
- TailwindCSS
- Chrome Extension Manifest V3
- Tesseract.js
- OpenAI API
- Framer Motion

---

# Folder Structure

```txt
hoverlingo-extension/
│
├── public/
│   ├── icons/
│   └── manifest.json
│
├── src/
│   ├── background/
│   ├── content/
│   ├── popup/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── README.md
├── package.json
├── vite.config.js
└── tailwind.config.js
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/yourname/hoverlingo-extension.git
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development

```bash
npm run dev
```

---

# Build Extension

```bash
npm run build
```

---

# Load Extension Into Chrome

1. Open Chrome

2. Go to:

```txt
chrome://extensions
```

3. Enable:

```txt
Developer Mode
```

4. Click:

```txt
Load unpacked
```

5. Select:

```txt
dist/
```

---

# How It Works

## Text Translation

```txt
Hover text
→ detect content
→ translate
→ render tooltip
```

---

## OCR Translation

```txt
Hover image
→ OCR extract text
→ translate
→ overlay translated result
```

---

# Manifest Example

```json
{
  "manifest_version": 3,
  "name": "HoverLingo",
  "version": "1.0.0",
  "permissions": [
    "storage",
    "activeTab"
  ],
  "host_permissions": [
    "<all_urls>"
  ],
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content.js"]
    }
  ]
}
```

---

# Roadmap

## v1
- hover text translation
- tooltip UI
- language selector
- copy translation

## v2
- OCR image translation
- manga translator
- subtitle translator

## v3
- AI contextual translation
- bilingual mode
- translation history
- cloud sync

---

# AI Providers

Supported:
- OpenAI
- Gemini
- LibreTranslate

---

# Future Ideas

- YouTube subtitle translation
- PDF translation
- AI summarization
- voice translation
- screenshot translation
- smart dictionary mode

---

# Showcase Ideas

## TikTok

```txt
This Chrome extension translates anything instantly.
```

## Twitter/X

```txt
Built an AI hover translator using React + Chrome Extension APIs.
```

---

# Why This Project Is Cool

- real-world usefulness
- AI + OCR combination
- strong UX showcase
- visually impressive
- practical engineering
- indie hacker vibe
- recruiter-friendly

---

# License

MIT
