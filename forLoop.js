const obj = [
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

for(let i=0 ; i<obj.length ; i++){
      console.log(obj[i])
      console.log(obj[i].name)
      console.log(obj[i].contact)
      console.log(obj[i].email)
      console.log(obj[i].qualification)
      console.log(obj[i].email[0])
      console.log(obj[i].email[1])

}
