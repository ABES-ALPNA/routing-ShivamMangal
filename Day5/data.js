const user=[
    {id:101,name:"rohit"},
    {id:102,name:"sivam"},
    {id:103,name:"vivek"}
]

if(user.find(u=>u.id===102)){
    console.log("is exist")
}else{
    console.log("id not present")
}
