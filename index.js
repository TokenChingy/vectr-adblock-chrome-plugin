let adElements = [
  document.querySelector("ads"),
  document.querySelector("section.ads.side"),
  document.querySelector("section.ads.bottom")
];

console.log(adElements);

for (let i = 0; i < adElements.length; i++) {
  adElements[i].parentNode.removeChild(adElements[i]);
}
