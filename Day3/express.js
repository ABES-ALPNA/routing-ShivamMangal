const express=require("express")
const app = express();

app.get(("/"),(req,res)=>{
    res.send("helloooo");
});
app.get("/name", (req,res)=> {
    res.send("shivam");
});
app.post("/page",(req,res)=>{
    res.send("this is my page.")
});
app.listen(3000, () => {
    console.log("server started at 3000")
});