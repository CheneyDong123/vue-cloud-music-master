export function useMsToMin(time: number | string) {
  if (typeof time == "number") {
    let minute = Math.floor(time / 60000).toString();

    let second = Math.floor((time % 60000) / 1000).toString();
    if (minute.length < 2) {
      minute = "0" + minute;
    }
    if (second.length < 2) {
      second = "0" + second;
    }
    return minute + ":" + second;
  }
}
