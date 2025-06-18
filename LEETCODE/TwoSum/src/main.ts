
// QUEST: TWOSUN

function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j]
      }
    }
  }

  return [];
}

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(twoSum(lista, 10));


// QUEST: Add Two Numbers