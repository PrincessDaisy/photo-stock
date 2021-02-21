import React from 'react'
import style from './Preloader.module.css'
import PreloaderGif from './../../assets/icons/Preloader.gif'

const Preloader = () => {
    return <div>
        <img src={PreloaderGif} alt="" className={style.preloader}/>
    </div>
}

export default Preloader
