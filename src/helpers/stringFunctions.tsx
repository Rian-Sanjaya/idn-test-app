export const firstLetterToUpperCase = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const firstWordsToUpperCase = (string: string = "") => {
  const arrStr = string.split(" ");
  const result = arrStr
      .map((word) => {
          return firstLetterToUpperCase(word);
      })
      .join("");

  return result;
};

export const truncateString = (string: string, num: number) => {
  return (string.length > 65) ? string.slice(0, num) + '...' : string;
}