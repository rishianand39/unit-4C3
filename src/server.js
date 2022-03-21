const connect  = require("./configs/db");
const app=require('./index')

app.listen(5000,async()=>{
    try {
       await connect()
      console.log("listening on port 5000")
    } catch (error) {
        console.log("error")
    }
})