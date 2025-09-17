// find the and return its inded

function findIndex(arr,target){
    for (let i = 0; i < arr.length; i++) {
       if(arr[i] == target){
        return i
       }
        
    }
    return -1
}


let  arr = [1,2,3,4,5,6,9,5]
let target = 5
let result = findIndex(arr,target);
console.log(result);
