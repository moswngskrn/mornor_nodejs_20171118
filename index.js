// const http = require('http');
// const fs = require('fs');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req,res) => {
//     fs.writeFile('nu.txt','Hello nu 1',(err) => {
//         res.statusCode=200;
//         res.setHeader('Content-Type','text/plain');
//         res.end('Hello NU');
//         if(err){
//             console.log(err);
//         }
//         console.log('write file');
//     });
// });

// server.listen(port,hostname,() => {
//     console.log('Listen on port 3000');
// });


// console.log("Hello NU");

const async = require('async');
const request = require('request');

const fs = require('fs');

const items=[];


const q = async.queue((task,callback)=>{
    request('http://apptitude.co.th/',(error,response,body)=>{
        if(error){
            console.log(error);
            callback();
        }
        fs.writeFile('nu.html',body,(err) => {
            if(err){
                console.log(err);
            }
            console.log('write file');
        });
        //console.log("write");
        callback();
    });
},1);

q.drain = ()=>{
    console.log('all items have been processd');
}

for(i=0;i<1;i++){
    items.push({number:i});
}

q.push(items,(err)=>{
    console.log('finish process item');
})
//console.log('test')

