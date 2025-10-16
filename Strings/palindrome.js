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

let res = isPalindrome("A man, a plan, a canal: Panama")
console.log(res)