import Sidebar from './Sidebar'
import {useSelector} from 'react-redux'
import {Outlet} from "react-router-dom"

const Body = () => {
   const tooglemenu = useSelector((store) => store.app.tooglemenu)
 return(
    <div className='flex flex-row' > 
     {tooglemenu ? null : <Sidebar/>}
    <Outlet />
    </div>
 )
}
export default Body