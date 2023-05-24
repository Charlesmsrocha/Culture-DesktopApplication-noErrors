const appname = document.querySelector('.appname');
const dynamicText = document.getElementById('dynamic-text');

const backgroundColor = window.getComputedStyle(appname).backgroundColor;
const textColor = getContrastColor(backgroundColor);

appname.style.setProperty('--text-color', textColor);

function getContrastColor(color) {
  // Extract RGB values from the background color
  const rgb = color.match(/\d+/g);
  const r = rgb[0];
  const g = rgb[1];
  const b = rgb[2];

  // Calculate the luminance value
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Determine the contrast color based on luminance value
  return luminance > 0.5 ? '#000' : '#fff';
}
