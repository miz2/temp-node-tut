// sync methods 
const {readFileSync,writeFileSync, read}=require('fs')
const first=readFileSync('./fs module/content/first.txt','utf-8')
const sec=readFileSync('./fs module/content/second.txt','utf-8')
console.log(first,sec);
// create a file
writeFileSync('./fs module/result-sync.txt',`Here is result: ${first},${sec}`,{flag:'a'})

// async method

const {readFile,writeFile}=require('fs')
readFile('./fs module/content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    // returns the buffer if we dont provide utf value
    const f1=result
    console.log(first);
    readFile('./fs module/content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second=result;
        writeFile('./fs module/content/result-sync.txt',`Here is result: ${f1},${second}`,(err,result)=>{
            if(err){
                console.log(err);
            }
            console.log(result);
        })
    })
})