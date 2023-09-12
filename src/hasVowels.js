const hasVowels = (string) => {
   const vowels = new Set("AEIOUaeiou");
   for(const char of string) {
    if (vowels.has(char)) {
      return true;
    }
   }
   return false
};

module.exports = hasVowels;