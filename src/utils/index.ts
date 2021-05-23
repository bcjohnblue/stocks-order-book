export const numberWithCommas = (n: number | string): string => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
