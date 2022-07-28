function time() {

    // get city name
    const city = document.querySelector('#city').value;
  

    axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=""&method=8`)
       .then(function (response) {
            // handle success
            const data = response.data;
            console.log(data);

// for card
  const Sunrise = document.querySelector('#sunrisetime').innerHTML = data.data.timings.Sunrise + " AM"
  const sunsettime= document.querySelector('#sunsettime').innerHTML = data.data.timings.Sunset + " PM" ;
  const Fajar= document.querySelector('#Fajar').innerHTML = data.data.timings.Fajr + " AM" ;
  const Dhuhr = document.querySelector('#Dhuhr').innerHTML = data.data.timings.Dhuhr + " PM" ;
  const Asar= document.querySelector('#Asar').innerHTML = data.data.timings.Asr + " PM" ;
  const Maghrib= document.querySelector('#Maghrib').innerHTML = data.data.timings.Maghrib + " PM" ;
  const Esha= document.querySelector('#Esha').innerHTML = data.data.timings.Isha + " PM" ;
   document.querySelector('.day').innerHTML = data.data.date.readable ;
 
   document.querySelector('.locationtext').innerHTML = "  "+ data.data.meta.timezone ;
    document.querySelector('.hijiDay').innerHTML =  data.data.date.hijri.month.ar + " "+ data.data.date.hijri.year 
    + " "+ data.data.date.hijri.day  ;


   
//    document.querySelector('.prayername').innerHTML = data.data.date. ;
//    document.querySelector('.currentprayertime').innerHTML = data.data.date. ;


            }


            

        )
        setInterval(() => {
            document.querySelector("#time").innerText = moment().format('h:mm:ss a');
     }, 1000);

     if(isNaN(city)){
        document.querySelector("#visible").classList.remove("hidden");
  
            }
        else{
            alert("Enter City Name")
         
    }}
   
    
    

