function exist(){
    a=document.getElementById("pwd").value
    b=document.getElementById("name").value
    get= sessionStorage.getItem('a')
     put=sessionStorage.getItem('b')
      console.log(get)
     console.log(put)
    if(a==get && b==put){
          alert ("A/C Already Exist On This USER");
          }
          else{
    sessionStorage.setItem('a',a)
    sessionStorage.setItem('b',b)
    alert ("Created Acount Successfully");
          }
   }


   function log(){
    a=document.getElementById("pwd").value
    b=document.getElementById("name").value
      get= sessionStorage.getItem('a')
     put=sessionStorage.getItem('b')
      console.log(get)
     console.log(put)
    if(a==get && b==put){
          alert ("login success");
          window.location.href = "book.html"
          }
          else{
            alert ("USER NOT FOUND!");
          }

   }
