function check(){
	var a="";
	if(document.getElementById("fname").value=="")
		//alert("First Name is Missing");
		a=a+"First Name is Missing\n";
  else if((document.getElementById("fname").value.length) < 6)
  	//alert("Length is less than 6");
  	a=a+"Length is less than 6 in First Name\n";
  if (document.getElementById("lname").value=="")
		//alert("Last Name is Missing");
		a=a+"Last Name is Missing\n";
	if(document.getElementById("pwd").value=="")
		//alert("Password is Missing");
  	a=a+"Password is Missing\n";
  if(document.getElementById("pno").value=="")
  	a=a+"Phone Number is Missing\n"; 
		//alert("Phone Number is Missing");
	else if(isNaN(document.getElementById("pno").value))
		a=a+"Please Enter Numerics in Phone Number";
	else if((document.getElementById("pno").value.length) < 10)
		a=a+"Phone Number is not Valid\n";

	if(a != "")
		alert(a);
	else
		alert(document.getElementById("fname").value + "\n" + document.getElementById("lname").value + "\n" + document.getElementById("pno").value);
}
