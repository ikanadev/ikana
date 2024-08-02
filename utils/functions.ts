export function getRandomItem<T>(items: Array<T>): T {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
}
