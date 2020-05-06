export function getRandomFromArray(arr, num = 5) {
  console.log("arr", arr);
  const now = [...arr];
  if (now.length < num) return now;
  const randomArr = [];
  for (let index = 0; index < num; index++) {
    const len = now.length;
    const ranIndex = Math.floor(Math.random() * len);
    randomArr.push(now[ranIndex]);
    now.splice(ranIndex, 1);
  }
  return randomArr;
}

export function getRandomFromArrays(arrs, nums) {
  if (arrs.length !== nums.length) return arrs;
}
