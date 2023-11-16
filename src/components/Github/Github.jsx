// import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    
    const data  = useLoaderData()

    // const [data, setData] = useState({name:"", img:""})
    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/chiragyadav2003')
    //     .then(response => response.json())
    //     .then(data => 
    //             {console.log(data)
    //             const user_name = data.name
    //             const img_url = data.avatar_url
    //             console.log(user_name, img_url)
    //             // setData({user_name, img_url})
    //             setData(data)
    //              }
    //         )
    // }, [])


  return (
    <div className='flex justify-around items-center text-center m-4 bg-gray-600 text-white p-4 text-3xl '>
        <div className='flex flex-col gap-y-6 '>
            <div>Name : {data.name}</div>
            <div>login : {data.login}</div>
          
        </div> 
        <div>   
        <img className=' p-5' src={data.avatar_url} alt="" />
        </div>
    </div>
  )
}

export default Github

export const  githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/chiragyadav2003')
    return response.json()
}