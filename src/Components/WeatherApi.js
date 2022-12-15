import React, { useContext } from 'react';
import WeatherContext from '../Context/WeatherContext';
import WeatherDetails from './WeatherDetails';

export default function WeatherApi() {

    const { weatherdata, time, iconNtext ,datalocation} = useContext(WeatherContext)

    return (
        <>
            <div>

                <div className=' bg-white  m-3'>
                    <div className='flex justify-between p-3'>
                        <h1 className='uppercase font-semibold '>current weather</h1>
                        <div>{time}</div>
                    </div>
                    <div className='flex justify-center items-center '>
                        <div>
                            <img src={iconNtext.icon} alt="" />
                        </div>
                        <div className=' flex flex-col px-5'>
                            <div className='text-[4rem]'>{weatherdata.temp_c}<span className='text-2xl'>c</span> </div>
                            <div className='text-xs'> RealFeel {weatherdata.feelslike_c}</div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-center font-semibold'>{iconNtext.text}</h1>
                    </div>
                    <WeatherDetails />
                </div>

                <div className='font-semibold text-center'> {datalocation.name} , {datalocation.region} ,{datalocation.country}</div>
                <div className='text-center'>{datalocation.tz_id}</div>
                <div className='text-center'>{datalocation.localtime}</div>
            </div>

        </>
    )
}
