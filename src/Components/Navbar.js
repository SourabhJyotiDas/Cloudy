import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsTsunami } from 'react-icons/bs';
import { AiOutlineCloud } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';
import { TbArrowsCross } from 'react-icons/tb';
import WeatherContext from '../Context/WeatherContext';
import LoadingBar from 'react-top-loading-bar';





export default function Navbar() {
    
    const { togglemode, handleOnClick, handleOnchange, name } = useContext(WeatherContext)
    const {progress} = useContext(WeatherContext)

    return (
        <>
         <LoadingBar
                color='red'
                progress={progress}
            />
            <nav className='bg-black  flex justify-between items-center px-2 py-2 text-white'>
                <div className='flex items-center'>
                    <AiOutlineCloud size="2rem" />
                    <div className='px-2 font-semibold'><Link to="/">{name}</Link></div>
                    <BsTsunami size="1.5rem" />
                </div>
                <div>
                    <BiMenuAltRight size="1.8rem" id='burger' onClick={togglemode} />
                    <TbArrowsCross size="1.5rem" className='hidden' id='burgerX' onClick={togglemode} />
                </div>
            </nav>

           

            <nav className='bg-black hidden h-[100vh] w-[100%] fixed' id='navlist'>
                <div className='flex items-center justify-center'>
                    <input className='w-[100%] p-3 rounded-md outline-none' type="search" name="" id="" placeholder='Search' onChange={handleOnchange} />
                    <button className='bg-blue-400 text-white mx-2 p-3 rounded-md' onClick={handleOnClick}>Go</button>
                </div>

                <div className=''>
                    <div className=' flex flex-col justify-center text-gray-400 pt-5  '>
                        <Link className='px-5 py-2 w-[100%] hover:text-white ' to="/">Today</Link>
                        <Link className='px-5 py-2 w-[100%] hover:text-white ' to="/">Hourly</Link>
                        <Link className='px-5 py-2 w-[100%] hover:text-white ' to="/">Daily</Link>
                        <Link className='px-5 py-2 w-[100%] hover:text-white ' to="/">Radar</Link>
                        <Link className='px-5 py-2 w-[100%] hover:text-white ' to="/">MinuteCast</Link>
                        <Link className='px-5 py-2 w-[100%] hover:text-white ' to="/">Monthly</Link>
                        <Link className='px-5 py-2 w-[100%] hover:text-white ' to="/">Air Quality</Link>
                        <Link className='px-5 py-2 w-[100%] hover:text-white ' to="/">Health & Activities</Link>
                    </div>
                </div>


            </nav>

           
        </>
    )
}
