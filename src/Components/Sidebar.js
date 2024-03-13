import { useSelector } from "react-redux"
import {Link} from 'react-router-dom'
const Sidebar = () =>{
    const ismenuopen = useSelector((store) => store.app.ismenuopen)
    if(!ismenuopen) return null;
    return(
       <div className="mt-5 mx-5 ">
        <ul>
            <Link to="/"><li className="py-2 font-bold">HOME</li></Link>
            <li className="py-2 font-bold">Shorts</li>
            <li className="py-2 font-bold">Subscription</li>
            <li className="py-2 font-bold">History</li>
            <li className="py-2 font-bold">Watch Later</li>
            <li className="py-2 font-bold">Downloads</li>
        </ul>
       </div>
    )
}

export default Sidebar