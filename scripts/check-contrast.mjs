const palette = {
  walnut: "#2b2b2b",
  walnutHover: "#1f1f1f",
  cream: "#f7f5f2",
  brass: "#c6a96b",
  brassSoft: "#efe4cf",
  muted: "#6e6257",
};

const checks = [
  ["Primary button", palette.walnut, palette.cream],
  ["Primary hover", palette.walnutHover, palette.cream],
  ["Secondary button", palette.brassSoft, palette.walnut],
  ["Muted text on cream", palette.cream, palette.muted],
];

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const full =
    clean.length === 3 ? clean.split("").map((char) => `${char}${char}`).join("") : clean;
  const value = Number.parseInt(full, 16);

  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  };
}

function toLinear(channel) {
  const normalized = channel / 255;
  return normalized <= 0.03928
    ? normalized / 12.92
    : ((normalized + 0.055) / 1.055) ** 2.4;
}

function luminance(hex) {
  const { r, g, b } = hexToRgb(hex);
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

function contrastRatio(first, second) {
  const one = luminance(first);
  const two = luminance(second);
  const [light, dark] = one > two ? [one, two] : [two, one];
  return (light + 0.05) / (dark + 0.05);
}

function grade(ratio) {
  if (ratio >= 7) return "AAA normal text";
  if (ratio >= 4.5) return "AA normal text";
  if (ratio >= 3) return "AA large text only";
  return "Fail";
}

for (const [label, background, foreground] of checks) {
  const ratio = contrastRatio(background, foreground);
  console.log(
    `${label}: bg ${background} / fg ${foreground} -> ${ratio.toFixed(2)}:1 (${grade(ratio)})`,
  );
}
