const express=require('express');
const app=express();
const cors=require('cors');

const userRouter=require('./routers/userRouter').router;
const novelRouter=require('./routers/novelRouter').router;
const utilRouter=require('./routers/utils').router;
const queryRouter=require('./routers/queryRouter').router;

const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: { origin: ["http://localhost:3000"] },
  });


  io.on("connection", (socket) => {
    console.log("client connected");
  
    // on function is used for receieving the event
    socket.on("sendmsg", (data) => {
      console.log(data);
      data.sent = false;
      socket.broadcast.emit("recmsg", data);
    });
  });

  
// app.listen(5000,()=>{

//          console.log("listening 5000...");
// });


app.use(
    cors({
      origin: ["http://localhost:3000"],
    })
  );

  
  httpServer.listen(5000, () => {
    console.log("server started");
  });


app.use(express.static("./uploads"));
app.use(express.json());
// app.use(cors({origin:['http://localhost:3000'],}));

app.use('/user',userRouter);
app.use('/novel',novelRouter);
app.use('/util',utilRouter);
app.use('/query',queryRouter);


app.get('/',(req,resp)=>{

    resp.send('home');2
});

