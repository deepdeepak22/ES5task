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
function callLoop(){
    for (let i in obj){
        console.log(obj[i].name)
        console.log(obj[i].email)
        console.log(obj[i].contact)
        console.log(obj[i].qualification)
    }
    
}
obj.forEach(callLoop)