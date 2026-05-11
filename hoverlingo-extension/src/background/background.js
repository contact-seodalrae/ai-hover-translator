// Background script for HoverLingo extension
chrome.runtime.onInstalled.addListener(() => {
  console.log('HoverLingo extension installed')
})

// Handle messages from content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'translate') {
    // Handle translation request
    sendResponse({ translated: 'Mock translation' })
  }
})