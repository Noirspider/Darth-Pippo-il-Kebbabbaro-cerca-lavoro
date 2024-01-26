export function timeSince(dateString) {
  function timeSince(dateString) {
    const date = new Date(dateString);
    const seconds = Math.floor((new Date() - date) / 1000);

    let interval = seconds / 31536000; // Anni

    if (interval > 1) {
      return Math.floor(interval) + " anni fa";
    }
    interval = seconds / 2592000; // Mesi
    if (interval > 1) {
      return Math.floor(interval) + " mesi fa";
    }
    interval = seconds / 86400; // Giorni
    if (interval > 1) {
      return Math.floor(interval) + " giorni fa";
    }
    interval = seconds / 3600; // Ore
    if (interval > 1) {
      return Math.floor(interval) + " ore fa";
    }
    interval = seconds / 60; // Minuti
    if (interval > 1) {
      return Math.floor(interval) + " minuti fa";
    }
    return Math.floor(seconds) + " secondi fa";
  }
}
