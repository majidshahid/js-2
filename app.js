// ===chapter # 21/25 & task # 1

var firstname = prompt("Enter your first name")
var lastname = prompt ("Enter your last name ")
var fullname = firstname + "   " + lastname ;
document.write("welcome " + fullname);


//=== chapter # 21/25 & task # 2

var a = prompt("Enter your favorite mobile modle","iphone 7 plus")
var b = a.length
document.write("Your favorite mobile is :" + a  + "<br>")
document.write("length of string is :" + b)

// ===chapter # 21/25 & task # 3

var a = "pakistani";
document.write("string :" + a + "<br>");
document.write ("Index of 'n':"+a.indexOf("n") )


// ===chapter # 21/25 & task # 4

var a = "Hello World";
document.write("string :" + a + "<br>");
document.write ("last Index of 'l':" + a.lastIndexOf("l") );

// ===chapter # 21/25 & task # 5

var a = "Pakistani";
document.write("string :" + a + "<br>");
document.write("character at index 3 :" + a.charAt(3));

 // ===chapter # 21/25 & task # 6

var firstname = prompt("Enter your first name")
 var lastname = prompt ("Enter your last name ")
var fullname = firstname.concat(  lastname);
document.write(fullname);

// ===chapter # 21/25 & task # 7

var city="Hyderabad";
var citynew =city.replace("Hyderabad","Islamabad")
document.write("city :" + city  + "<br>");
document.write ("After replacement :" + citynew);

// ===chapter # 21/25 & task # 8

var a ="Ali and sami are best friend . they play cricket and football together";
var b = a.replace(/and/g,"&");
document.write(a + "<br>")
document.write(b);

// ===chapter # 21/25 & task # 9

var a ="472";
var num = Number(a);
document.write("Value :" + a + "<br>"  +"Type : String" + "<br>")
document.write("Value :" + num + "<br>"  +"Type : number")

// ===chapter # 21/25 & task # 10


var name="peanuts";
document.write("user input :" + name + "<br>");
name = name.toUpperCase();
document.write("upper case :" + name);

// ===chapter # 21/25 & task # 11

var name ="javasript";
document.write("user input :" + name + "<br>");
name = name.toUpperCase();
document.write("title case :" + name);

// ===chapter # 21/25 & task # 12

var num =35.36
document.write("number :" + num  + "<br>" );
var b =num.toString();
document.write("Result :" + b );


// ===chapter # 21/25 & task # 13

var a=["@","!",".",","];
var username =prompt("enter user name")
if (a.indexOf(username) !== -1){
    alert("please enter valid username")
}else{
    alert("welcome")
}





// ===chapter # 21/25 & task # 14

var a =["CAKE","APPLE PIE","COOKIE","CHIPS","PATTIES"];
var search =prompt ("enter your item");
search = search.toUpperCase();
if (a.indexOf(search) !== -1){
    alert("yes "+ search +" avalible" )
}else{
    alert("no " + search + " not avalible")
}


// ===chapter # 21/25 & task # 15

var password=prompt("Enter your password" ,"good123");
var b = password.length;
var split = password.split("")
if (b >=6){
alert("enter correct password")
}

// ===chapter # 21/25 & task # 16

var uni ="university of karachi";
var b = uni .split("");
console.log(b)
while(b<uni.length){
    console.log(b);
    b++;
}

// ===chapter # 21/25 & task # 17

var a = "pakistan";
var b = a.charAt(a.length-1);
document.write("User input :" + a + "<br>");
document.write("last character of input is :" + b);

// ===chapter # 21/25 & task # 18

var a ="The quick brown fox jumps over the lazy dog";
var b = (a.indexOf("the"))
document.write(a + "<br>")
document.write(b);

// ===chapter # 26/30 & task # 1

var a = "3.45214";
document.write("Number : " + a + "<br>")
var b =  Math.round (a);
document.write ("round off value :" + b + "<br>");
var c = Math.floor (a);
document.write ("floor value :" + c + "<br>");
var d =  Math.ceil (a);
document.write ("ceil value  :" + d + "<br>");

// ===chapter # 26/30 & task # 2

var a = "-2.673";
document.write("Number : " + a + "<br>")
var b =  Math.round (a);
document.write ("round off value :" + b + "<br>");
var c = Math.floor (a);
document.write ("floor value :" + c + "<br>");
var d =  Math.ceil (a);
document.write ("ceil value  :" + d + "<br>");

// ===chapter # 26/30 & task # 3


var a = "-4";
document.write("value :" + a +"<br>")
var b =Math.abs(-4);
document.write("absolute value :" + b);

// ===chapter # 26/30 & task # 4

var dice = Math.floor(Math.random() * 7);
document.write("random dice value : " + dice);

// ===chapter # 26/30 & task # 5

var heads = "heads";
var tails ="tails";
var a = Math.random() * 2;
var b=Math.floor (a);
if (b === 0){
    alert(heads)
}
else {
    alert (tails)
}
 

// ===chapter # 26/30 & task # 6

var a = Math.random() * 101;
var b = Math.floor(a);
document.write (" random number between 1and 100 : " + b);

// ===chapter # 26/30 & task # 7

var a =prompt("Enter your weight","50kg");
var b = string.match(a);
document.write(b)

// ===chapter # 26/30 & task # 8

var a = Math.random() * 11;
var  b =  Math.floor(a);
var c =+prompt(" Enter a number between 1 and 10");
if (c == b ){
    alert("Congratulation")
}
else{
    alert("TRY AGAIN")
}



// ===chapter # 31/34 & task # 1

var a = new Date ();
document.write(a);

// ===chapter # 31/34 & task # 2


var a = new Date ();
var b =a.toString ();
var c = b.slice (4,8);
document.write(c);


// ===chapter # 31/34 & task # 3

var a = new Date ();
var b = a.getDay ();

if (b == 0){
    document.write("Sunday")
}
else if (b ==1){
    document.write("Monday")
}
else if (b ==2){
    document.write("Tuesday")
}
else if (b ==3){
    document.write("Wednesday")
}
else if (b ==4){
    document.write("Thursday")
}
else if (b ==5){
    document.write("Friday")
}
else if (b ==6){
    document.write("saturday")
}


// ===chapter # 31/34 & task # 4


var a = new Date ();
 var b = a.getDay ();
 if (b ==5){
        document.write(" it's Friday")
    }
    else if (b ==6){
        document.write("it's saturday")
    }
    else if(b == 0){
            document.write("it's Sunday")
        }


// ===chapter # 31/34 & task # 5


var a = new Date ();
 var b = a.getDate ();
 if ( b<=15 ){
    document.write("First fifteen days of the month")
 }
else{
    document.write("last  fifteen days of the month")
}


// ===chapter # 31/34 & task # 6


var a = new Date ();
var b = a.getTime();
document.write("current date :" + a + "<br>");
document.write ("Milliseconds since Jan. 1 1970 :" + b + "<br>")


// ===chapter # 31/34 & task # 7

var a = new Date ();
var b =a.toString ();
var c = b.slice (16,18);
if (c<=12){
    document.write("IT's PM")
}
else {
    document.write("IT's AM")
}


// ===chapter # 31/34 & task # 8

var d = new Date();
d.setDate(0);
document.write(d)


// ===chapter # 31/34 & task # 9

var a = new Date ("June 18, 2015")
var amili = a.getTime();
var today = new Date ();
var todaymili = today.getTime()
var diff = todaymili - amili ;
var year = diff/(1000*60*60*24);
var accu = Math.floor(year)
document.write(accu + "   days have passed since  1st Ramadan  2015")

// ===chapter # 31/34 & task # 10



var a = new Date ("Jan 1, 2015")
var amili = a.getTime();
var today = new Date ();
var todaymili = today.getTime()
var diff = todaymili - amili ;
var year = diff/(1000*60);
var accu = Math.floor(year)
document.write(today + "<br>")
document.write( accu + "  : seconds had passed since beginning of 2015")


// ===chapter # 31/34 & task # 11

var a = new Date () ;
document.write ("current date :  " + a + "<br>");
var b = new Date ("jun 23, 2020 11:43:35") ;
document.write ("1 houe ago ,it was :  " + b);

// ===chapter # 31/34 & task # 12

var a = new Date () ;
document.write ("current date :  " + a + "<br>");
var b = new Date ("jun 23,1920") ;
document.write("100 year back , it was :  " + b)


// ===chapter # 31/34 & task # 13

var dob = new Date (prompt("Enter your date of birth","jan 1 ,1990"))
var dobmilli = dob.getTime();
var today =new Date ();
var todaymilli = today.getTime();
var diff =todaymilli - dobmilli ;
var accuage = Math.floor(diff/(1000*60*60*24*30*12))
document.write("your age is : " + accuage + "<br>");
var b  = dob.getFullYear();
document.write("your birth year is : " + b);

// ===chapter # 31/34 & task # 14


document.write("<h1>K-Electric Bill</h1>" + "<hr>");
document.write("Customer Name : "," xyz" + "<br>")
document.write("Month" , "Fabruary" + "<br>")
var a = +prompt ("Number Per Units " ,"500")
document.write("Nuber of units : " + a +"<br>");
document.write("Charges Per Units : ","16" +"<br>");
var b = "16";
var c = a*b;
document.write("Net Amount Payable (within Due Date) : "+c   +"<br>");
var d ="350"
document.write("Late Payment Surcharge : " + d  +"<br>" );
var e = c+350 ;
document.write("Gross Amount Payable(after due date) :" + e  +"<br>")

// ===chapter # 35/38 & task # 1

function a(){
    document.write( new Date () )
}
a();

// ===chapter # 35/38 & task # 2


function first (a,b){
    document.write(a + b)
}
var a = prompt("Enter your first name");
var b = prompt("Enter your last name");
var c =a
var d = b
first(c,d);

// ===chapter # 35/38 & task # 3


function sum (a,b){
    return a*b
}
var a = prompt("Enter your first number","100");
var b = prompt("Enter your last number","200");
document.write(sum(a,b))

// + is not working  //


function f (a,b){
    return b+a
}
document.write(f(2,3))


// ===chapter # 35/38 & task # 4


var val1 =prompt("Enter your first value")
var sign =prompt("choose your operater")
var val2 =prompt("Enter your second value")
console.log (val1 +sign +val2)
if(sign === '+'){
    alert((+val1) + (+val2))
}
else if (sign=== '-') {
alert(val1 - val2)
}
else if (sign=== '*') {
    alert(val1 * val2)
    }
    else if (sign ==='/'){
        alert(val1 / val2)
    }
    else if (sign ==='%'){
        alert(val1/val2*100+'%' )
    }


// ===chapter # 35/38 & task # 5


var num =prompt("Enter your NUMBER","2");
var a = Math.sqrt(num);
document.write(a)


// ===chapter # 35/38 & task # 7

function rng (first,last){
    var ans=[];
    for (let i=first; i<=last;i++){
        ans.push(i + "<br>");
    }
    document.write (ans)
}
{rng(1,300)}

