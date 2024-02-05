const express=require('express');
const app=express();

app.get('/',(req,res)=>{
res.send('hi home')
})
app.listen(5000);