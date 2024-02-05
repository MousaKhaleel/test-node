var bar='tar';
console.log('hello');
console.log(module);
module.exports={bar};

const http=require('http');
const server=http.createServer((req,res)=>{
    if (req.url==="/") {
        res.end('wlcm home')
    }
    else
    res.end('<h1>error</h1>')
// res.write('hi');
// res.end();
})
server.listen(5000);