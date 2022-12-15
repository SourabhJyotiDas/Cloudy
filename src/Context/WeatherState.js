import { useState, useEffect } from "react";
import WeatherContext from "./WeatherContext";


const WeatherState = (props) => {

    const sample = {
        "name": "Sourabh Jyoti Das",
        "Code": "Sourabh Das",
    }





    const apikey = "380f2be3623f46c1bcf125754222107";

    const [weatherdata, setweatherdata] = useState([]);
    const [time, setTime] = useState([]);
    const [iconNtext, setIconNtext] = useState([]);
    const [location, setLocation] = useState("mumbai");
    const [name, setName] = useState("");
    const [datalocation, setDatalocation] = useState("");
    const [progress, setprogress] = useState(0)


    const updateWeather = async () => {
        let url = (`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${location}`);
        let response = await fetch(url)
        let data = await response.json()
        
        // console.log(data.current.condition);
        // console.log(data.current);
        setweatherdata(data.current)
        setDatalocation(data.location)
        setIconNtext(data.current.condition)
        setprogress(50)
        // console.log(data);
        let exactdate = data.location.localtime.split(" ")[1]
        setTime(exactdate)
        setName(data.location.name)
        setprogress(100)
        setInterval(() => {
            setprogress(0)
        }, 1000);
    }

    const togglemode = () => {
        document.getElementById("burger").classList.toggle('hidden');
        document.getElementById("burgerX").classList.toggle('hidden');
        document.getElementById("navlist").classList.toggle('hidden');
    }


    const handleOnchange = (e) => {
        setLocation(e.target.value)
        // console.log(e.target.value);
    }

    const handleOnClick = () => {
        updateWeather()
        togglemode()
    }

    useEffect(() => {
        updateWeather()
    }, [])


    return (
        <WeatherContext.Provider value={{ sample, weatherdata, time, iconNtext, togglemode, handleOnClick, handleOnchange, name, datalocation, progress }}>
            {props.children}
        </WeatherContext.Provider>
    )
}
export default WeatherState