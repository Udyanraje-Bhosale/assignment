import React, { useState } from 'react'
import '../styles/api.css'
import icon from '../Assets/icon.png'
import axios from 'axios'

const Api = () => {

  const [data, setData]= useState({})
  const [city, setCity]= useState("")

  const getWeather= (cityName)=>{
    if (!cityName) return 
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8aa0d9ad6538f9c7ce1ad0c8d0bb91f4`
    axios.get(url).then((res)=>{
      setData(res.data)
    }).catch((err)=>{
        console.log(err)
    })

  }

  const getWeatherDetails =()=>{
    getWeather(city)
  }
 
  return (
   <>
   <div className="col-md-12">
    <div className="weather p-5">
        <h3 className='text-center'>Get Weather</h3>

        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control shadow" onChange={(e)=>setCity(e.target.value)} placeholder='Enter the City Name!!!'/>
          <button className='btn btn-primary mx-2' style={{width:'fit-content'}} onClick={getWeatherDetails}>Search</button>
        </div>
    </div>

    <div className="cold-md-12 text-center mt-5">
      <div className="shadow rounded weatherResultBox">
        <img src={icon} alt="" className="weatherIcon" />

        <h5 className="weatherCity">{data?.name}</h5>
        <h6 className="temp">{((data?.main?.temp)-273.15).toFixed(2)}	℃</h6>
      </div>
      
    </div>
    </div>
   </>
  )
}

export default Api