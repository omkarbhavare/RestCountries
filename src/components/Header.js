import React,{useState} from 'react'
import './Header.css'

export const Header = () => {
    const [dark,setDark]=useState(false);
    

    const changeBackground=()=>{
        setDark(!dark);
    }
  return (
    <div className='container header' style={{backgroundColor: !dark ? '#2B3945' : '',color:!dark ? 'white':''}}>
        <h1>Rest Countries</h1>
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
  )
}
