const express=require('express');
const app=express();
const cors=require('cors');

const userRouter=require('./routers/userRouter').router;
const novelRouter=require('./routers/novelRouter').router;
const utilRouter=require('./routers/utils').router;

app.listen(5000,()=>{

         console.log("listening 5000...");
});

app.use(express.static("./uploads"));
app.use(express.json());
app.use(cors({origin:['http://localhost:3000'],}));

app.use('/user',userRouter);
app.use('/novel',novelRouter);
app.use('/util',utilRouter);






app.get('/',(req,resp)=>{

    resp.send('home');2
});

