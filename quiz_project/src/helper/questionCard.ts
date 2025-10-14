export function shuffleArray(arr: string[]) {
  const newArray = [...arr];

  for (let i = 0; i < arr.length; i++) {
    const j = Math.floor(Math.random() * (arr.length - 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return newArray;
}
