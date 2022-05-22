const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const middlewareSetup = require('./middleware/middleware.js')
const { db } = require('./utils/database.js')
const userRouter  = require('./routers/routers.js')
const { User } = require('./models/userSchema.js')
app.listen(PORT, ()=>{
    console.log(`Listening at port :${PORT}`);
})
middlewareSetup(app)
async function start(){
await db();
app.use(userRouter);
app.get('/',(req,res)=>{
    res.send("Hello world...")
});
app.get('/users',async(req,res)=>{
    const users = await User.find({});
    res.send(users)
});
}
start().catch(console.error())
