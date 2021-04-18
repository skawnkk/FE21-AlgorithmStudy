
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  return binary(left, right, nums, target);
};

const binary = (left, right, nums, target) => {
  let mid = Math.floor((left + right) / 2);
  const toLeft = () => binary(left, mid - 1, nums, target);
  const toRight = () => binary(mid + 1, right, nums, target);

  if (left > right) return -1;

  //1234567

  if (nums[mid] === target) return mid;
  if (nums[left] < nums[right]) {
    return target < nums[mid] ? toLeft() : toRight();
  }
  if (nums[left] < nums[mid]) {
    return nums[left] < target && target < nums[mid] ? toLeft() : toRight();
  }
  if (nums[mid] < nums[right]) {
    return nums[mid] < target && target < nums[right] ? toRight() : toLeft();
  }
};

const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
console.log(search(nums, target));
//4
