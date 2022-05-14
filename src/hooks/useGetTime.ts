export function useGetTime(time: number) {
  var date = new Date(time);
  // var date = new Date(time* 1000);
  var year = date.getFullYear() + "-";
  var month =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  var dates = date.getDate() + " ";
  var hour = date.getHours() + ":";
  var min = date.getMinutes() + ":";
  var second = date.getSeconds();
  return year + month + dates + hour + min + second;
}
