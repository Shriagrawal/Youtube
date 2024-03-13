import React, {useEffect, useState} from 'react'
import {YouTube_api} from '../Utils/constants'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import {closemenu} from '../Utils/appslice'
import VideoCard from './VideoCard';

const VideoContainer = () => {
    const[data,setdata] = useState([])
    const fetchdata = async () => 
        {
        const data = await fetch(YouTube_api);
        const jsondata = await data.json();
        setdata(jsondata.items);
        }
        // console.log(data);
    useEffect( ()=>{
            fetchdata();
        },[])
    
         const Dispatch = useDispatch()
        const dipatchaction = () => {
            Dispatch(closemenu());   
        }

    return(
        <div className='flex flex-wrap mx-16'>
        {   
            data.map((each_video) => (
                <Link key={each_video?.id} to={"http://localhost:3000/" + each_video?.id} onClick={dipatchaction}>
               <VideoCard props={each_video}/>
               </Link>
            )
            )
        }
    </div>
    )
}

export default VideoContainer