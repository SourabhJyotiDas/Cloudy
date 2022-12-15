import React, { useContext } from 'react';
import WeatherContext from '../Context/WeatherContext';



export default function WeatherDetails() {
    const { weatherdata } = useContext(WeatherContext)

    return (
        <div className='p-3 flex flex-col pt-10 space-y-3 font-medium' >
            <div className='flex items-center justify-between '>
                <h1>Max UV Index</h1>
                <h1>{weatherdata.uv}</h1>
                
            </div>            

            <div className='flex items-center justify-between '>
                <h1>Visibility </h1>
                <h1>{weatherdata.vis_km} km</h1>
            </div>

            <div className='flex items-center justify-between '>
                <h1>Humidity </h1>
                <h1>{weatherdata.humidity}</h1>
            </div>
            
            <div className='flex items-center justify-between '>
                <h1>Wind Gusts </h1>
                <h1>{weatherdata.gust_kph} km/h</h1>
            </div>

            <div className='flex items-center justify-between '>
                <h1>Pressure </h1>
                <h1>{weatherdata.pressure_mb} mb</h1>
            </div>

            <div className='flex items-center justify-between '>
                <h1>Wind</h1>
                <h1>{weatherdata.wind_kph} km/h</h1>
            </div>

            <div className='flex items-center justify-between '>
                <h1>Wind degree</h1>
                <h1>{weatherdata.wind_degree}</h1>
            </div>

            <div className='flex items-center justify-between '>
                <h1>Wind direction</h1>
                <h1>{weatherdata.wind_dir}</h1>
            </div>
        </div>
    )
}
