function sumAcceptsReadOnly(nums: readonly number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

const nums1: readonly number[] = [1, 2, 3];
console.log(sumAcceptsReadOnly(nums1)); // 6

const nums2: number[] = [1, 2, 3];
console.log(sumAcceptsReadOnly(nums2)); // 6
