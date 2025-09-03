var isPalindrome = function (x) {
    if (x < 0) return false; // negative number palindrome nahi hota

    let xCopy = x;
    let rev = 0;

    while (x > 0) {
        let rem = x % 10;
        rev = (rev * 10) + rem;

        // range check for 32-bit signed int
        if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
            return 0;
        }

        x = Math.floor(x / 10);
    }

    return rev === xCopy;
};
