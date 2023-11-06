const obj =  [
    {
        "name" : "deepak",
        "contact" : "5555555",
        "email":["abc@gmail.com" , "xyz@gmail.com"],
        "qualification" : "B.tech"
        
    },
    {
        "name" :"anu",
        "contact" : "55555553",
        "email":["abc1@gmail.com" , "xyz1@gmail.com"],
        "qualification" : "B.tech"
        
    },
    {
        "name" :"anunay",
        "contact" : "55555553",
        "email":["abc2@gmail.com" , "xyz2@gmail.com"],
        "qualification" : "B.tech"
        
    }
    

]
for(var i of obj){
    console.log(i)
}
for(var i of obj){
    console.log(i.name)
}
for(var i of obj){
    console.log(i.contact)
}
for(var i of obj){
    console.log(i.email)
}
for(var i of obj){
    console.log(i.qualification)
}