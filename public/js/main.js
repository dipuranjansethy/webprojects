const cityName=document.getElementById('cityname');
const submitBtn=document.getElementById('submitbtn');
const city_name=document.getElementById('city_name');
const temp_status=document.getElementById("temp_status");
const temp=document.getElementById("temp");
const datahide=document.querySelector('.middle_layer');
let day=document.getElementById('day');
const weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d=new Date();
day.innerText=weekday[d.getDay()];
const today_data=document.getElementById('today_data');
const month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
today_data.innerText=`${d.getDate()}  ${month[d.getMonth()]}`;


const getInfo=async(event)=>{
    event.preventDefault();
    let cityval =cityName.value;
    

    if (cityval=== "") {
        city_name.innerText=`Plz write something to search`;
        datahide.classList.add('data_hide');

    }else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=82c3bf58cf927bc5b3e2bab78e4806bf`;
            const responce = await fetch(url);
            const data=await responce.json();
            const arrData=[data];
            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country} `;
            const tempp=(arrData[0].main.temp-273).toFixed(2);
            temp.innerText=`${tempp} C`;
            temp_status.innerText=arrData[0].weather[0].main;
            
            

            if(temp_status=="Clear"){
                temp_status.innerHTML= "<i class='fas fa-sun' style='#eccc68';></i>"
            }else if(temp_status=="Clouds"){
                temp_status.innerHTML= "<i class='fas fa-cloud' style='#f1f2f6';></i>"
            }else if(temp_status=="Rain"){
                temp_status.innerHTML= "<i class='fas fa-rain' style='#a4b0be';></i>"
            }else{
                temp_status.innerHTML= "<i class='fas fa-cloud' style='#f1f2f6';></i>"
            }
            datahide.classList.remove('data_hide');    

        }catch{
            city_name.innerText=`Plz write city name properly`;
            datahide.classList.add('data_hide');    
        }
        


    }
}
submitBtn.addEventListener('click',getInfo);