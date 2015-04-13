var Hapi = require('hapi'); //lower case H would still work. Just showing respect to the guy who created it who wanted it to be upper case. 
//The variable Hapi requires 'hapi' to work.
// node . will check out package.json file. one of the info is the dependencies.  
//require means go to file system, lookfor the file. 
// if you console.log(Hapi), after node . it will return some funky stuff. Bring the Hapi file into our project.
console.log("heya");
console.log(Hapi);

var server = new Hapi.Server(); //create a new varaible called server, and start hapi server. 
//Server is a function that you can call. the variable Hapi is not a server. Hapi is a library. Create a server using new Hapi.Server(). "new" is something we haven't seen, calls a constructor that creates an object from a class.

server.connection({ //make connection with server. Below is configuration option. just preparing for server launch later.
 host: '0.0.0.0', //'local host' for local computer. Localhost is own computer. 0.0.0.0 means everything. Later, this could be like harryquotes.com
 port: 8080, // any number but convention is 8000
 routes: {cors: true} //ok if someone wants to do it from the outside.
  //normal servers spit out html. cors means cross origin. cors true means if any server asks you, true means ok. 
});


var plugins = [{ register: require('./routes/quotes.js') }]; // this is the plugin for extending the framework. One plugin that will extend the server, in this case, new route.

server.register(plugins, function (err) { //do plugins and run function(err) when server registers...
  if (err) { throw err; } 
  //if there is an error, then "throw err"...throw = exceptions. what if the file is not there? what if something is already on port 8080? What if someone asks to divide by zero? exceptions identifies these risky situations and deal with these gracefully. throw will spit out the error. program will stop.
  
  server.start(function () { //when server starts, run this function... You only want to start if you register successfully. 
    server.log('info', 'Server running at: ' + server.info.uri); //server will take a bit of time to start. Server log will only execute after server start.
    console.log("server successfully registered, server started!")
  });
});


//add the route
server.route({ //whenever we make request to rserver, then method is GET
 method: 'GET',
 path: '/hello', //whatever is after 8001
 handler: function(request, reply) { //handler is a key word. whenever send hello, do FUNCTION code.
   reply('hello world');
 }
});


// server.start();


