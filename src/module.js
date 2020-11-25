console.log("module.js");

async function start() {
 return await Promise.resolve(console.log("hey"));
}

start().then(console.log);
