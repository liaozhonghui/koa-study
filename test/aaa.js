/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (s[0] === '0') return 0;
    let dp0 = 1, dp1 = 1;
    for (let i = 1; i < s.length; i++) {
        var tmp = dp1;
        if (s[i] === '0') {
            if (s[i - 1] === '1' || s[i - 1] === '2') dp1 = dp0;
            else return 0;
        } else if (s[i - 1] === '1' || (s[i - 1] === '2' && s[i] >= '1' && s[i] <= '6')) {
            dp1 = dp0 + dp1;
        }
        dp0 = dp0;
    }
    return dp1;
};

console.log('result', numDecodings('11'));