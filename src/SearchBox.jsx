import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"; 
    const API_KEY = "3350b63f31a60b9c139d8bc8f4f3c707";

    let getWeatherInfo = async() => {
        try {
            let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let data = await response.json();
            let result = {
             city: city,
             temp: data.main.temp_max,
             tempMin: data.main.temp_min,
             tempMax: data.main.temp_max,
             humidity: data.main.humidity,
             feelsLike: data.main.feels_like,
             weather: data.weather[0].description,
            }
            return result;

        }
        catch(err) {
            throw err;
        }
     
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async(event) => {
        try {
            console.log(city);
            event.preventDefault();
            setCity("");
           let newInfo = await getWeatherInfo();
           updateInfo(newInfo);
           }
           catch(err) {
            setError(true);
           }
        }
       
    
    return(
        <>
        <div className = "search-box">
            <h3> Search for the weather </h3>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} />
            <br />  <br />
            <Button variant="contained" endIcon={<SendIcon />} type = "submit" > Search  </Button>
            {error && <h3 style={{color:"red"}}> No Such Place Exist ♾️</h3>}
            </form>
        </div>
        </>
    )
}