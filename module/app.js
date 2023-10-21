const os=require('os')
// info about current user
// OS is a node module used to provide information about the computer operating system.
const user=os.userInfo()
console.log(user);
// method returns system uptime insec
console.log(user);
console.log(`The system uptime is ${os.uptime()} sec`);

const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOs);