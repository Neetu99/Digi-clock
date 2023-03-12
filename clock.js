setInterval(()=>{

    let hours = document.getElementById('hours');
    let Minuts = document.getElementById('Minuts');
    let Seconds = document.getElementById('Seconds');
    let ampm = document.getElementById('ampm');

  
   let hr = new Date().getHours();
   let mn = new Date().getMinutes();
   let sc= new Date().getSeconds();
   let am= hr>=12 ? "Pm" : "Am";

   // convert 24hr clock to 12 hours;
    if(hr>12){
      hr = hr - 12;
    }

  // add 0 before single digit number

  hr = (hr < 10 ) ? "0"+ hr : hr;
  mn = (mn < 10 ) ? "0"+ mn : mn;
  sc = (sc < 10 ) ? "0"+ sc : sc;
   
   hours.innerHTML=hr;
   Minuts.innerHTML=mn;
   Seconds.innerHTML=sc;
   ampm.innerHTML= am;

      })
