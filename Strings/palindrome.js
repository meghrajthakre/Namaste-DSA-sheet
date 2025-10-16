function isPalindrome(s) {
    s = s.toLowerCase()

    let filterStr = '';
    let rev = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[a-z0-9]/i)) {
            filterStr = filterStr + s[i]
            rev = s[i] + rev
        }

    }
    // another way of reverse the string
    // let reverse = filterStr.split('').reverse().join('')
    return filterStr == rev


}

//  second aproach for palindrome without using extra space t=O(n) s=O(1) 
var isPalindrome = function (s) {
    s = s.toLowerCase()
    let j = s.length - 1;
    let i = 0;

    while(i < j){
        if(!s[i].match(/[a-z0-9]/i)){
            i++
        }
        else if(!s[j].match(/[a-z0-9]/i)){
            j--
        }
        else if(s[i] === s[j]){
           i++
           j--
        }
        else{
            return false
        }
    }
    return true
};