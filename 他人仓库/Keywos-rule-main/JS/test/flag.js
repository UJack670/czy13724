function getFlagEmoji(e) {
    const n = e
      .toUpperCase()
      .split("")
      .map((e) => 127397 + e.charCodeAt());
    return String.fromCodePoint(...n).replace(/🇹🇼/g, "🇨🇳");
  }
  console.log(getFlagEmoji(" "));










































































// Adding a dummy stoverride commit(23)
// Adding a dummy sgmodule commit(29)
// Adding a dummy plugin commit(27)
