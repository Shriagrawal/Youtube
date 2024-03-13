import {useDispatch, useSelector} from "react-redux"
import {tooglemenu} from '../Utils/appslice'
import { useEffect, useState } from "react"
import {suggestion_api} from '../Utils/constants'
import {cacheResult} from '../Utils/searchslice'
const Header = () =>{
    const[inputdata,setinputdata] = useState("");
    const[suggestiondata,setsuggestiondata] = useState();
    const[showlist,setshowlist] = useState(false);

    const searchcache = useSelector((store) => store.search) //containg object

    useEffect(()=>{
      const timer = setTimeout(() => {
        if(searchcache[inputdata]) // if present
        {
            setsuggestiondata(searchcache[inputdata]); // no need for api call
        }
        else{
             fetchdata();
        }
        
       }, 200);     //Debouncing implementaion 
    
       return () =>{
        clearTimeout(timer);  //clearing timer
       }
 
    },[inputdata])
    const togglesidebar = () =>{
        dispatch(tooglemenu())
    }

    const dispatch = useDispatch()

    const inputhandler = (e) =>{
        setinputdata(e.target.value);
        setshowlist(true);
        // console.log(inputdata);
    }
    
    const final_api = suggestion_api + inputdata;
    const fetchdata = async() =>{
        try{
        const data = await fetch(final_api)
        const jsondata = await data.json();
         console.log(jsondata[1]);
         setsuggestiondata(jsondata[1]);
         dispatch(cacheResult({
            [inputdata] : jsondata[1]
         }))
        }
        catch(error)
        {
            console.log(error)

        }
    }

    const fillinput = (key) =>{
        setinputdata(key);
        setshowlist(false);
    }

    return(
    <div className="h-10 flex flex-row my-3">
        <div className='flex flex-col'>
       <button onClick={togglesidebar}><img src="https://cdn-icons-png.flaticon.com/512/7710/7710488.png" className="h-8 pl-6 pt-2" alt=''></img></button> 
       </div>
        <img src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png" className="h-8 pl-6 pt-2" alt=''></img>
        <div className='m-auto '>
        <input className='border border-gray-300 rounded-l-full w-96' onChange={inputhandler} type="text" value={inputdata}></input>
        <button className='rounded-r-full font-medium bg-white px-2 hover:bg-gray-200 border border-gray-300' >Search</button>
        {showlist && 
         <div className="bg-white rounded-lg fixed shadow-md px-2 w-96 py-3 ">
        {
            suggestiondata.map((s)=>(
               <div key={s} className=" hover:bg-slate-200">
                  <button onClick={() => {fillinput(s)}}>
                     🔍 {s}
                  </button> 
                </div>
            ))
        }
      </div>}
        </div> 
    </div>
    )
}

export default Header