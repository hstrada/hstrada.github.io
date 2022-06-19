export const loader = ({ src, width, quality }) => {
  return `https://hstrada.github.io/public/${src}?w=${width}&q=${quality || 75}`
}
