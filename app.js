function wordInn(string, word) {
    const lowerCaseString = string.toLowerCase();
    const lowerCaseWord = word.toLowerCase();
    const wordIn = lowerCaseString.includes(lowerCaseWord);
    return wordIn;
}

const result1 = wordInn('abcdEglishdgfdsgs', 'English'); // false
console.log(result1);
const result2 = wordInn('abcdEnglishdgfdsgs', 'English'); // true
console.log(result2);


