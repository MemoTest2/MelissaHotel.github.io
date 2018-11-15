function getPrice() { var x; x=document.getElementById("1").value; 
 
if  (document.getElementById("RadWhere1").checked) 
 x= x* document.getElementById("RadWhere1").value;
  else if  (document.getElementById("RadWhere2").checked)  x= x* document.getElementById("RadWhere2").value;
   else if  (document.getElementById("RadWhere3").checked)  x= x* document.getElementById("RadWhere3").value; 
 
if (document.getElementById("chkBreak").checked)
  x = x + parseInt( document.getElementById("chkBreak").value); 
  if (document.getElementById("chkLunch").checked) 
   x = x + parseInt( document.getElementById("chkLunch").value); 
    if (document.getElementById("chkDinner").checked) 
     x = x + parseInt( document.getElementById("chkDinner").value); 
 
var i; for (i=0; i<document.getElementById("SelectExtra").length; i++) 
 if (document.getElementById("SelectExtra")[i].selected) 
   x= x + parseInt(document.getElementById("SelectExtra")[i].value);  
 
 document.getElementById("txtOut").value=x; } 


function ChangeFlag() { document.getElementById("imgFlag").src= document.getElementById("SelectFlag").value }
