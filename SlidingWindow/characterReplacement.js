// 424. Longest Repeating Character Replacement
// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.
var characterReplacement = function (s, k) {
    let i = 0;
    let j = 0;
    let map = {};
    let maxWindow = 0;

    while (j < s.length) {

        // Always first include s[j] in the window
        map[s[j]] = (map[s[j]] || 0) + 1;

        // If window invalid -> shrink
        if (!isWindowValid(map, k)) {
            map[s[i]]--;
            i++;
        } else {
            maxWindow = Math.max(maxWindow, j - i + 1);
        }

        j++;
    }

    return maxWindow;
};

const isWindowValid = function (map, k) {
    let totalCount = 0;
    let maxCount = 0;

    for (let i = 0; i < 26; i++) {
        let char = String.fromCharCode(i + 65);
        if (map[char]) {
            totalCount += map[char];
            maxCount = Math.max(maxCount, map[char]);
        }
    }

    return (totalCount - maxCount <= k);
};



// 1️⃣ Add the new character first
// 2️⃣ Check if window valid
// 3️⃣ If invalid → shrink
// 4️⃣ If valid → update max
// 5️⃣ Move j forward
// 6️⃣ No double-counting
// 7️⃣ No undefined index
// 8️⃣ Window always represents correct state