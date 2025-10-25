export function viewsFormat(viewCount) {
  if (viewCount >= 1000) {
    const result = Math.floor(viewCount / 1000);
    return `${result}k`;
  }

  return viewCount;
}
