document.querySelector(".github").addEventListener("click",(c)=>
{
  window.open("https://github.com/Nuhid1");
});

document.querySelector(".linkedin").addEventListener("click",(c)=>
{
  window.open("https://www.linkedin.com/in/md-nuhidur-rahman-6aba37349/");
});

document.querySelector(".facebook").addEventListener("click",(c)=>
{
  window.open("https://www.facebook.com/aj.nuhid.16/");
});

document.querySelector(".about").addEventListener("click",(c)=>
{
  window.location.href = "about.html";
});

document.querySelector(".projects").addEventListener("click",(c)=>
{
  window.location.href = "projects.html";
});

document.querySelector(".contact").addEventListener("click",(c)=>
{
  window.location.href = "contact.html";
});

function clock1 (x)
{
  if (x<10)
  {
    x="0"+x;
  }
  return x;
}

function clock ()
{
  const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      let ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // convert 0 to 12
    
      hours=clock1(hours);
      minutes=clock1(minutes);
      seconds=clock1(seconds);

      const time = "Time: " + hours + ":" + minutes + ":" + seconds + " " + ampm;

      document.querySelector(".clock").innerHTML = time;

      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const dateString = now.toLocaleDateString(undefined, options);
      document.querySelector('.date').textContent = dateString;

};

setInterval(clock,1000);
clock();
