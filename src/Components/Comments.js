import { useEffect, useState } from 'react'
import {comment_api} from '../Utils/constants'
import { useParams } from 'react-router-dom';
const Comments = () => {
     const[commentdata,setcommentdata] = useState(null);
    useEffect(()=>{
      fetchdata();
    },[])

    const {id} = useParams();
    console.log(id);
    const final_comment_api = `${comment_api}${id}`

    const fetchdata = async() => {
       const data = await fetch(final_comment_api);
       const jsondata = await data.json();
       setcommentdata(jsondata.items);
    }
    commentdata && console.log(commentdata)
    return(
       <div>
        { commentdata &&
            commentdata.map((c) => 
            <div className='my-3'>
                <p>{c?.snippet?.topLevelComment?.snippet?.authorDisplayName}</p>
                <p className='font-thin'>{c?.snippet?.topLevelComment?.snippet?.textOriginal}</p>
            </div>)   
        }
       </div>
    )
}

export default Comments