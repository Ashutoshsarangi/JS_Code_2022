let arr = [2, 2, 2, 2, 2]; //[1, 0, -1, 0, -2, 2];
const target = 8;
const result = [];
arr = arr.sort((a, b) => a - b);

const sameElementExist = (array, anotherArray) => {
  for (let item of array) {
    console.log(item);
    if (item.toString() === anotherArray.toString()) {
      return true;
    }
  }
  return false;
};

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j <= arr.length - 1; j++) {
    let left = j + 1;
    let right = arr.length - 1;
    console.log(i, j, left, right);
    while (left < right) {
      let sum = arr[i] + arr[j] + arr[left] + arr[right];
      console.log(sum);
      if (sum === target) {
        sameElementExist(result, [arr[i], arr[j], arr[left], arr[right]])
          ? null
          : result.push([arr[i], arr[j], arr[left], arr[right]]);
        left += 1;
        right -= 1;
      } else if (sum > target) {
        right -= 1;
      } else {
        left += 1;
      }
    }
  }
}

console.log(result);
