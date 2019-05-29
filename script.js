   var fName = prompt("Please enter your first Name");
   var lName = prompt("Please enter your last Name");
   var Age = prompt("Please enter your age");
   var Gender = prompt("Please enter your gender");

   var data = {
       fName: fName,
       lName:lName,
       age:Age,
       gender:Gender,
       fullname:function(){return(this.fName +" "+ this.lName)}
   }

alert("Name:"+data.fullname()+"\n"+"Age:"+data.age+"\n"+"Gender:"+data.gender);