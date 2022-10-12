{/* <h4>Q.1 Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button</h4> */}
let word=document.getElementById("word");
function create(){
let heading= document.createElement("H1");
heading.innerText="MERN STACK";
heading.style.color='aqua'
word.appendChild(heading);
};
/* <h4>Q.2 Write code to get 1st H1 element from a webpage using DOM</h4> */
let para=document.querySelector("p");
console.log(para);
// output=> <p id="one">Lorem ipsum dolor sit.</p>

/* <h4>Q.3 Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second</h4> */
setInterval(clock,1000);
function clock(){
    var time = new Date();
    var hrs =time.getHours();
    var min =time.getMinutes();
    var sec =time.getSeconds();
    var en = "AM";
    if(hrs>12){
      en='PM'
    }
    if(hrs>12){
      hrs=hrs-12;
    }
    if(hrs==0){
      hrs=12;
    }
    if(hrs<10){
       hrs= '0' + hrs;
    }
    if(min<10){
        min= '0' + min;
     }
     if(sec<10){
        sec= '0' + sec;
     }

document.getElementById('clock').innerText= hrs + ':' + min + ':' + sec + ' ' + en;
}
/* <h4>Q.4 Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"</h4> */
function textChange(){
   let contain=document.getElementById('contain')
       contain.innerText="welcome to Elevation acadamy"
       contain.style.color='red'
}
/* <h4>Q.5 Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text</h4> */
function hide(){
  let plx=document.getElementById("container");
    plx.style.display="none"
}

// function show(){
//   let x = document.getElementById("conti");
//   let btnnn= document.getElementById("btnnn")
//   if(x.style.display=="none"){
//     x.style.display="block"
//     btnnn.innerText="hide"
//   }else{
//     x.style.display="none"
//     btnnn.innerText="show"
//   }
// }

/* <h4>Q.6 Given an array of 0's and 1's find out number of 0's</h4> */
let arr=[0,1,0,1,1,0,0,1,0,1]
 let counter = 0;
 for (let i=0;i<arr.length;i++){
      if(arr[i]==0){
       counter++;
   }
 };
 console.log("total 0's in an array is "+counter);
//  output:> 5
//  <h4>Q.7 Given an array find out total no. of odd and even nos.</h4>
let arr1=[1,2,3,4,5,6,7,8,9,10,11,12]
let even=0,odd=0;
for(let i=0;i<arr1.length;i++){
  if(arr1[i]%2==0){
    even++
  }else{
    odd++
  }
}
console.log('total even no in an array is '+ even++ +" and" +" total odd no in an array is "+odd++);
/* <h4>Q.8 Given a string find out number of vowels </h4> */
let str= "I Love my India"
let count=0;
let vowels="aeiouAEIOU";
for(let i=0;i<str.length;i++){
  if(vowels.includes(str[i])){
    count++;
  }
}
console.log("total no of vowels in string is "+ count);