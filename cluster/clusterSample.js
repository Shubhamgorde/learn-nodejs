const cluster=require('cluster');
const http=require('http');
const express = require('express')


const numCPUs=require('os').cpus().length;
if(cluster.isMaster){
    console.log(`Master ${process.pid} is running`);

    //fork workers
    for(let i=0;i<numCPUs; i++){
        cluster.fork();
    }

    cluster.on('exit',(worker,code,signal)=>{
        console.log(`worker ${worker.process.pid} died`);
    });

}
else{
    const port = 3000
    const app = express()
    
    app.get('/', (req, res) =>{
        console.log(`worker handling the request`);
        res.send('Hello World!')
    } )

    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    // http.createServer((req,res)=>{
    //     res.writeHead(200);
    //     res.end('heelo world \n');
    // }).listen(8000);

    console.log(`worker ${process.pid} started`);
}