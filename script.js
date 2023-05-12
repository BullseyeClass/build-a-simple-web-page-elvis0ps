
 const button=document.getElementById('btn')
 function alertbtn(){
   alert ("hello world!")
   document.getElementById('result').innerText='Button Clicked'
}

   button.addEventListener("click",alertbtn);