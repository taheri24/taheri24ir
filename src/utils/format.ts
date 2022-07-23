export const formatNumber = (input: number, size: number) => {
  let string = input.toString();
  while (string.length < size) string = `0${string}`;
  return string;
};
