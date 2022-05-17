export function formatCategory(categories: any, sub: any) {
  let sum: any = {};
  for (let i = 0; i < Object.keys(categories).length; i++) {
    let index = Object.keys(categories)[i];

    const key: any = categories[i];
    sum[key] = sub.filter((item: any) => item.category == index);
  }

  return sum;
}
