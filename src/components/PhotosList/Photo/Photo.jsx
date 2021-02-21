import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'
import style from './Photo.module.css'
import to_favorites from '../../../assets/icons/to_favorites.png'
import download from '../../../assets/icons/download.png'
import maximize from '../../../assets/icons/maximize.png'
import { NavLink } from 'react-router-dom'

const Photo = (props) => {
    const toFavotires = () => {
        if (localStorage.getItem('Favorites') == "") {
            localStorage.setItem('Favorites', JSON.stringify([props.item.id]))
        } else {
            let fav = JSON.parse(localStorage.getItem('Favorites'))
            localStorage.setItem('Favorites', JSON.stringify([props.item.id, ...fav]))
        }
    }
    return <div key={props.item.id} className={style.imgWrap} >
        <img src={props.item.urls.small} alt={props.item.alt_description} className={style.photoImage} />
        <div className={style.infoWrap} >
            <div className={style.userProfile}>
                <div className={style.userPhoto}><img src={props.item.user.profile_image.medium} /></div>
                <div>
                    <div>{props.item.user.name}</div>
                    {!!props.item.user.instagram_username && <a href={"https://instagram.com/" + props.item.user.instagram_username} target="_blank" className={style.link}>{"@" + props.item.user.instagram_username}</a>}
                </div>
            </div>
            <div className={style.actionIcons}>
                <div>
                    <div onClick={toFavotires}>
                        <img src={to_favorites} alt="" />
                    </div>
                </div>
                <div>
                    <NavLink to={{
                            pathname: '/photo-page/' + props.item.id,
                            props: {item: props.item}
                        }}>
                        <img src={maximize} alt="" />
                    </NavLink>
                </div>
                <div>
                    <a href={props.item.links.download + "?force=true"} target="_blank" download>
                        <img src={download} alt="" />
                    </a>
                </div>
            </div>
        </div>
    </div>
}

export default Photo