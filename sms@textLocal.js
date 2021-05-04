var http = require('http');
var urlencode = require('urlencode');
var request=require('request')
var http = require("https");

// module returns a response 
// module expects receivers number=region code and message

async function sendsms (toNumber,msg){
      
        var toNumber;
        var username = urlencode('info.oyesters@gmail.com');
        var hash = `${mention_hash_here}`; // The hash key could be found under Help->All Documentation->Your hash key. Alternatively you can use your Textlocal password in plain text.
        var sender = `${sender_name}`;
        var message=urlencode(msg)
        var data = 'username=' + username + '&hash=' + hash + '&sender=' + sender + '&numbers=' + toNumber + '&message=' + message;
        console.log(data);
        var options = {
         host: 'api.textlocal.in', path: '/send?' + data
        };
        callback =async function (response) {
         var str = '';//another chunk of data has been recieved, so append it to `str`
        await response.on('data', function (chunk) {
           str += chunk;
         });//the whole response has been recieved, so we just print it out here
         await response.on('end', function () {
           console.log(str);
         });
        }//console.log('hello js'))
        await http.request(options, callback).end();//url encode instalation need to use $ npm install urlencode
        
        }
        
module.exports=sendsms;