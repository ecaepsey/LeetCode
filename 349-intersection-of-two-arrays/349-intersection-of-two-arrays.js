/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var s1 = new Set(nums2)
    var s2 = new Set(nums1)
    
    
    return nums2.filter((item) => s2.has(item)).filter((d, index, array) => array.indexOf(d) == index)
    
    
};