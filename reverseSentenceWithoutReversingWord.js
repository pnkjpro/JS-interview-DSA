let a = "I am learning JavaScript";
a = " " + a;
let len = a.length-1;

let word = "";
let stack = "";

for(let i=len; i>=0; i--) {
    if(a[i] == ' ') {
        let tempWord = "";
        for(let j=word.length-1; j>=0; j--) {
            tempWord+=word[j];
        }
        stack += " " + tempWord;
        word = ""
    } else {
        word += a[i];
    }
}
console.log(stack);