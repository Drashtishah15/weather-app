import React  , {useState , useEffect} from 'react'
import WeatherCard from './weatherCard';
import "./style.css"


const Temp = () => {

   const [searchValue, setsearchValue] = useState("parbatsar");
   const [tempInfo, settempInfo] = useState({});

   const getWeatherInfo = async () => {
    try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=bfa48ef21780f2fb05acf343b11b9947` ;

        const res =await fetch(url);
        let data = await res.json();


        // object Destructring 
        const {temp , humidity, pressure} = data.main;
        const {main : weathermood} = data.weather[0];
        const {name} = data;
        const {speed} = data.wind; 
        const {country , sunset}  = data.sys;
       

        const myNewWeatherInfo = {
            temp , 
            humidity,
             pressure,
             weathermood,
             name,
             speed,
             country,
              sunset,
        };
        settempInfo(myNewWeatherInfo);

    }
    catch(error){
        console.log(error)
    }
   }

   useEffect(() => {
       getWeatherInfo();
   }, []);


  return (
    <>

    <div className="wrap">
          <div className="search">
            <input type="search" placeholder='Search...'
                autoFocus id='search'
                className='searchTerm'
                value={searchValue}
                onChange={(e) => setsearchValue(e.target.value)}
            />
            <button className='searchButton' type='button'
            onClick={getWeatherInfo}>
                Search
            </button>
          </div>
    </div>

    {/* card  */}
        <WeatherCard tempInfo = {tempInfo}/>
    </>
  )
}

export default Temp
