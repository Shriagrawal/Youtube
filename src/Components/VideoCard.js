import React from 'react'

const VideoCard = ({props}) => {
    return(
        <div  className="m-1 p-2 w-72">
        <img alt="of the video" src={props?.snippet?.thumbnails?.maxres?.url} className="h-42 w-72 rounded-lg shadow-md"></img>
        <ul>
        <li className="font-bold">{props?.snippet?.title}</li>
        <li className="font-thin">{props?.statistics?.viewCount} views</li>
        </ul>
        </div>
    )
}
export default VideoCard