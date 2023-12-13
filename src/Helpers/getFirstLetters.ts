export function getFirstLetters(str: string) {
  const words = str.split(' ');
  const firstLetters = words
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join('');
  return firstLetters;
}
