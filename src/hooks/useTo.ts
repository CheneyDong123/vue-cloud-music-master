export function useTo(count: string) {
  count = count.toString();
  switch (count.length) {
    case 1:
    case 2:
    case 3:
    case 4:
      break;
    case 5:
    case 6:
    case 7:
    case 8:
      count = count.slice(0, count.length - 4);
      count += "万";
      break;
    default:
      count = count.slice(0, count.length - 8);
      count += "亿";
      break;
  }
  return count;
}
