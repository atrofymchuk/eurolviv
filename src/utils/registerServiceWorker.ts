export const registerServiceWorker = () => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js").then(() => {
          console.log("Service Worker registered!")
        }).catch((error) => {
          console.error("Error registering Service Worker:", error)
        });
      }
}