var removeDuplicates = function(nums) {
    const uniqueNums = [];
    nums.forEach((el, i) => {
        // console.log(el)
        if(!uniqueNums.includes(el)){
            // console.log(uniqueNums)
            // console.log(!uniqueNums.includes(el))
            uniqueNums.push(el);
            // console.log(uniqueNums)
        }
        console.log(uniqueNums)
        return uniqueNums;
    })
};
const a = [1,1,2];
const b = [0,0,1,1,1,2,2,3,3,4];
removeDuplicates(b);