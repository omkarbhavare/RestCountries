import React,{useState} from 'react'
import './Header.css'
import { Search } from './Search/Search';

export const Header = () => {
    const [dark,setDark]=useState(false);
    

    const changeBackground=()=>{
        setDark(!dark);
    }
  return (
    <>
    <div className='container header' style={{backgroundColor: !dark ? '#2B3945' : '#fafafa',color:!dark ? 'white':''}}>
        <h1 onClick={()=>window.location.reload()} style={{cursor:'pointer'}}><i class="fa-solid fa-house"></i>&ensp;Rest Countries</h1>
        
        <span className='theme' onClick={changeBackground}>
            {!dark ?(
                <>
                <i class="fa-solid fa-moon fa-2xl "></i>
                </>
            ):(
                <>
                <i class="fa-solid fa-sun  fa-2xl"></i>
                </>
            )}
        </span>
    </div>
    <Search dark={dark}/>
    </>
  )
}
