export function consoleAsync(string) {
  setTimeout(() => {
    console.log(string);
  }, 0);
}
