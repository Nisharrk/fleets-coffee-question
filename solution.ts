function firstNonRepeated(s: string) {
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if (s.indexOf(char) === s.lastIndexOf(char)) {
      return char;
    }
  }
  return "";
}

const str1: string = "aabcc";
const str2: string = "hello";
const str3: string = "aabbcc";

console.log(firstNonRepeated(str3));
