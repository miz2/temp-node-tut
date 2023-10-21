const {readFile,writeFile}=require('fs')
console.log('start');
readFile('./fs module/content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    // returns the buffer if we dont provide utf value
    const f1=result
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
            console.log('done with 2nd task');
        })
    })
})
console.log('starting the new task');