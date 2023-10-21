const {readFileSync,writeFileSync, read}=require('fs')
console.log('start');
const first=readFileSync('./fs module/content/first.txt','utf-8')
const sec=readFileSync('./fs module/content/second.txt','utf-8')
console.log(first,sec);
// create a file
writeFileSync('./fs module/result-sync.txt',`Here is result: ${first},${sec}`,{flag:'a'})

console.log('done with the first task');
console.log('starting the next');
// takes place line by line