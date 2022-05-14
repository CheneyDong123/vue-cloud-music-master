export function useMsToMin(time: number | string) {
  if (typeof time == "number") {
    let minute = time / 60000;
    let second = (time % 60000) / 1000;
    return minute + ":" + second;
  }
}
