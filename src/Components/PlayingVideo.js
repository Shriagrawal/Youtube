import React, {useEffect, useState} from 'react';
import {video_api} from '../Utils/constants'
import { useParams } from 'react-router-dom';
import Comments from './Comments'
const PlayingVideo = () => {
    const [video_data,setvideodata] = useState(null);
    useEffect(()=>{
      fetchdata();
    },[])
    const {id} = useParams();
    const final_video_api = `${video_api}${id}`;
    const fetchdata = async () =>{
        const data = await fetch(final_video_api);
        const jsondata = await data.json();
        setvideodata(jsondata);
    }
    console.log(video_data);
      return(
        video_data &&
        <div className='ml-40 w-960'>
           <iframe width="960" height="500" className='rounded-xl'
           src={`https://www.youtube.com/embed/${id}`} 
           title="YouTube video player" 
           frameBorder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           allowFullScreen>
           </iframe>
           <div className=''>
           <p className='font-bold text-md'>{video_data?.items[0]?.snippet?.title}</p>
            <div className='flex flex-row justify-between my-5'>
           <p className='text-gray-700'>{video_data?.items[0]?.snippet?.channelTitle}</p>
           <p>{video_data?.items[0]?.statistics?.likeCount} Likes</p>
           </div>
             <div className='bg-slate-200  h-16 rounded-lg p-2'>
            <p>{video_data?.items[0]?.statistics?.viewCount} views </p>
            <p>{video_data?.items[0]?.snippet?.description.slice(0,30)}...show more</p>
            </div>
           <p className='font-bold text-lg my-5'>{video_data?.items[0]?.statistics?.commentCount} Comments</p>
           <Comments/>
           </div>
        </div>
    )
}

export default PlayingVideo