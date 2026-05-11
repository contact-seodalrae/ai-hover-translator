export const getStorage = async (key) => {
  return new Promise((resolve) => {
    chrome.storage.sync.get([key], (result) => {
      resolve(result[key])
    })
  })
}

export const setStorage = async (key, value) => {
  return new Promise((resolve) => {
    chrome.storage.sync.set({ [key]: value }, resolve)
  })
}