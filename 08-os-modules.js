// built in modules 

const os = require ('os');
const { clearScreenDown } = require('readline');

// info about current user 
const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime}`);


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

