// src/utils/scanLink.js
export const scanLink = async (url) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (url.includes('google')) {
        resolve({ status: 'safe' })
      } else if (url.includes('clickme')) {
        resolve({ status: 'suspicious' })
      } else {
        resolve({ status: 'malicious' })
      }
    }, 1500)
  })
}
