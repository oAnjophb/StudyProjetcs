
class Solution:
    def twoSum(self, nums, target):
        seen = {}
        for i, num in enumerate(nums):
            complemento = target - num
            if complemento in seen:
                return [seen[complemento], i]
            seen[num] = i

numbers  = [2, 7, 11, 15]
target = 9
print(Solution().twoSum(numbers, target))