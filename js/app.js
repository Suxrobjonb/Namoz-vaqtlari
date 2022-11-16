let elText = document.querySelector(".site__clock")

function getDate(){
      let now = new Date();
      let hour = now.getHours();
      let minute = now.getMinutes();
      let secund = now.getSeconds();
      elText.innerHTML = `${hour}`.padStart(2, "0") + ":" + `${minute}`.padStart(2, "0") + ":" + `${secund}`.padStart(2, "0");
      setTimeout(getDate, 1000)
   }
   
   getDate();