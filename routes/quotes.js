exports.register =function(server, options, next) { //standard way of starting things in hapi.
  
  var db = [
    {quote: "Nothing is Ever Random.", author: "Harry Chen 2015"},
    {quote: "I need beaver", author: "Harry Chen 26/03/2015"},
    {quote: "Demo or Die", author: "Harry"},
    {quote: "I need Bieber", author: "Harry Chen"},
    {quote: "I've never heard of it", author: "Harry Chen"},
    {quote: "You have to fork the repo and clone it in your computer", author: "Harry"},
    {quote: "What did I just see?", author: "Harry"},
    {quote: "Do you have a confession?", author: "Harry"},
    {quote: "Don't GOX me bro!", author: "Harry #classic"},
    {quote: "Yesterday is gone, but today is up for for grabs.", author: "Harry Chen"},
    {quote: "Have you forked today?", author: "Harry Chen #fakeharryquotes"},
    {quote: "Can I quickly interject?", author: "MDA"},
    {quote: "A lot of you has been trying to get some action through clicking", author: "HC"},
    {quote: "I wanna buy a lot of Fer today", author: "HC"},
    {quote: "You go, TIGER!", author: "Dom to Victoria"},
    {quote: "I tried. It's NEVER going to work for me", author: "Ken"},
    {quote: "I AM Harry Potter", author: "Harry Chen #fakeharryquotes"},
    {quote: "This is some geeky fun", author: "MDC"},
    {quote: "That's not what Jobs said", author: "HC"},
    {quote: "What ? Are we gambling here?", author: "HC"},
    {quote: "Oh, there's something to fork?", author: "XLS"},
    {quote: "That I can do. I don't even need eval", author: "MDC"},
    {quote: "Where's your javascript?", author: "Harryscript"},
    {quote: "Cloning is encouraged!", author: "HC"},
    {quote: "I'm going to get my fork. It's in the trash.", author: "Xiao"},
    {quote: "Harry === Geeky", author: "HC 1/4/2015"},
    {quote: "Xavi just blew my mind", author: "Elia <br/> wait.. when did I blow someone?", author: "XLS"},
    {quote: "I don't sweat. Ever", author: "XLS"},
    {quote: "This is ridiculous what they are suggesting", author: "Victoria referring to codeclimate"},
    {quote: "Strawpedo is actually pretty good", author: "Michael"},
    {quote: "If you ever have a daughter..... ", author: "Xiao..... Uhhhhhhhhhhh"},
    {quote: "...I'll ruin her before you can find me...", author: "xiao"},
    {quote: "I KNOW WHO'S COMING TO  MY FUNERAL", author: "Xiao"},
    {quote: "that's what she said", author: "Xiao"},
    {quote: "why would she say that??", author: "Michael"},
    {quote: "SO much sausage.... What do we(I) even do here... The sausage has exploded.... Oh wow that's good hmmmm mmmmmm", author: "Dom"},
    {quote: "I want to get real seriously deep tonight", author: "Dom"},
    {quote: "it's all in the back hand", author: "Dom, 'the beast' dunnet"},
    {quote: "Do you want me to hold it for you do you can do it with two hands?", author: "Dimple"},
    {quote: "When programmers see an INFINITE amount of forms to access a government, they are like: GG", author: "Harry Chen"},
    {quote: "You Are Being Smart Today", author: "The DOM."},
    {quote: "This was Distracting (Points to [Dom's] Balls)", author: "HC"},
    {quote: "So far you've all been consuming from my backend", author: "HC"},
    {quote: "I got rickroll'ed! I got rickroll'ed!", author: "Xiao"},
    {quote: "WOAAH", author: "Mia"},
    {quote: "Omg! Did it go to Mars? OMG! Did I go to Mars?", author: "HC"},
    {quote: "I'm not EVEN joking", author: "HC"},
    {quote: "WoW", author: "HC"},
    {quote: "෴", author: "HC"},
    {quote: "It's kinda like a prostitution", author: "MDC"}
  ]

  //here will go our routes for the API
    
  server.route([
      //HELLO WORLD
      {
        method: "GET",
        path: "/", //this refers to the index.
        handler: function(request, reply){ //what is a handler? when the route matches, it will do that function. request is something you send to server and ask them to do something. eg what operating system? have they been here before? what resolution? these goes inside request. handler is the name of a standard key. route object have three keys. handler is the function that will execute when the route triggers.
          reply("Hello, I am awesome HarryQuote API Server") //reply is a function.
        }        
      },  
    
          //Spaghetti
      {
        method: "GET",
        path: "/spaghetti/{pasta}", 
        handler: function(request, reply){ 
          reply("hi") //reply is a function.
        }        
      },  
    
      // get all the quotes
      {
        method: "GET",
        path: "/quotes",
        handler: function(request, reply) {
          reply(db);
        }
      },
      // get one quote without "gimme number"
//       {
//         method: "GET",
//         path: "/quotes/{quote_id}", 
//         handler: function(request, reply) {
//           reply( db[request.params.quote_id]); //
//         }
//       },
      
       // get one quote with "gimme number" if no number
      {
        method: "GET",
        path: "/quotes/{id}", //{} is just syntax. it's not a hash. whatever is inside {} is something else. e.g. template: "fer is {what}". then "fer is cool". so what is cool.
        handler: function(request, reply) {
          var id =Number(request.params.id) // dimple: if u need to access something in url then have to be params. Params is what I send. {what} is param. if quotes/fer, then /fer is param.  Param is like a template. 
          if (Number.isNaN(id)) { // if not a number...
            return reply ("Comon, gimme a number bro").code(404);
          }
          reply( db[id] ); //
        }
      },
     
     {
        method: "POST",
        path: "/quotes", 
        handler: function(request, reply) {
          var newQuote = request.payload.quote; // .quote can be anything as long as it corresponds to the postman. example, if you replace .quote with .XXX, it would work as long as the corresponding key in postman starts with XXX instead of quote, e.g., XXX[quote] and XXX[author] as keys instead of quote[quote] and quote[author] as keys. payload is what you're sending thru postman. the data. takes quotes and pushing to array of objects. push adds to the end.
          db.push(newQuote);
          reply(newQuote);
        }
     },

//      { //this one doesn't work yet.
//         method: "PUT", 
//         path: "/quotes/{id}", 
//         handler: function(request, reply) {
//           var id = Number(request,params,id);
//           var newQuote = request.payload.quotes;
//           var newAuthor = request.payload.author;
//           db[id].quote = newQuote;
//           db[id].author = newAuthor;
//           reply (db[id]);
//         }
//      },
    
   {
     method: 'PUT',
     path: '/quotes/{quote_id}',
     handler: function(request, reply) {
       var id = request.params.quote_id;
       db[id] = request.payload.newQuote;
       reply(db[id]);
     }
   },
    
     {
        method: "DELETE", //NOT DONE, use params for delete as well? use splice.
        path: "/quotes/{id}", 
        handler: function(request, reply) {
          var id = Number(request.params.id); 
          reply(db.splice(id,1));
        }
     },
    
  ]);
  next();  
}

exports.register.attributes = {
  name: "quotes-route",
  version: "0.0.1",
}