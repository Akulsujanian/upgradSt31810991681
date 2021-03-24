var pname = document.getElementById("name");
var email = document.getElementById("email");
var mob = document.getElementById("mobile");
var mydiv = document.getElementById("mydiv");
var tbody = document.getElementById("tbody");
var table = document.getElementById("table");
var count = 0;
function submission(){
    if(pname.value.length==0||email.value.length==0||mob.value.length==0)
    alert("there should be no empty field");
    else if (pname.value.length<3)
    alert("Name shoud have 3 letters ")
    else if(/^[a-zA-Z ]+$/.test(pname.value)==false)
    alert("name should only have letters");
    else if(mob.value.length!=10)
    alert("mobile no shoud be of 10 digits");
    else if( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/.test(email.value)==false)
    alert("please enter  valid email address");
    else{
       
    count++;
    var row = document.createElement("tr");
    row.setAttribute("class","added");
    row.innerHTML = "<td>"+pname.value+"</td><td>" + mob.value+"</td><td>"+email.value+"</td><td onclick ='deletetr()' style='background-color:lightgreen;' >delete</td>";
    tbody.appendChild(row);
    }
    
    if(count>0)
    table.style.display ="block";

    
 
}
function deletetr(){
  document.getElementsByClassName("added")[count-1].remove();
    count--;
    if(count<=0)
     table.style.display="none";
}