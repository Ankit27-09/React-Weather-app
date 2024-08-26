import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp() {
    let [weatherinfo, setWeatherinfo] = useState({city: "Delhi",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.4,
        tempMax: 25.09,
        humidity: 46,
        weather: "Overcast Clouds",});

        let updateInfo = (newInfo) => {
          setWeatherinfo(newInfo);
    }
    return(
        <>
        <div style = {{textAlign:"center"}}>
         <h1> Weather App </h1>

         <SearchBox updateInfo = {updateInfo}/>
         <InfoBox info = {weatherinfo} />

        </div>
            </>
    )
}