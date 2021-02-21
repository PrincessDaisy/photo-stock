import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'
import  PhotosAPI  from '../../api';
import style from './PhotoPage.module.css'
import toFav from './../../assets/icons/to_favorites_photo_page.png'
import donwload from './../../assets/icons/download_photo_page.png'
import PhotosList from '../PhotosList/PhotosList';

const PhotoPage = (props) => {
    const [item, setItem] = useState(null);
    const [collection, setCollection] = useState(null)
    const [readyForRender, setReadyForRender] = useState(false);
    let itemId = props.match.params.id;
    useEffect(() => {
        const fetchData = async () => {
            const result = await PhotosAPI.getPhoto(itemId);
            setItem(result.data);
        }
        const fetchCollection = async () => {
                await fetchData();
                const result = await PhotosAPI.getCollections(item.related_collections.results[0].id);
                setCollection(result.data);
                setReadyForRender(true)
        };
        fetchCollection()
    }, [])
    if (readyForRender) {
        return (<>
        <form action=""></form>
            <div className="container">
                <div className={style.photoInfo}>
                    <div className={style.infoTop}>
                        <div className={style.userInfo}>
                              <div className={style.userProfileImg}>
                                <img src={item.user.profile_image.medium} alt="" />
                            </div>
                            <div className={style.userProfile}>
                                <div className={style.userName}>
                                    {item.user.name}
                                </div>
                                <div className={style.userLink}>
                                    {!!item.user.instagram_username && <a href={"https://instagram.com/" + item.user.instagram_username} target="_blank" className={style.link}>{"@" + item.user.instagram_username}</a>}
                                </div>
                            </div>
                        </div>
                        <div className={style.imgActions}>
                            <div className={style.toFav}>
                                <img src={toFav} alt="" />
                            </div>
                            <div className={style.download}>
                                <a href={item.links.download + "?force=true"} target="_blank" download>
                                    <span className={style.downloadIcon}>
                                        <img src={donwload} alt="" />
                                    </span>
                                    <span>
                                        Download
                                </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={style.imgBlock}>
                        <img src={item.urls.regular} alt="" />
                    </div>
                    <div className={style.photoTags}>
                        <div className={style.tagsTop}>
                            <h3>
                                Похожие теги
                            </h3>
                        </div>
                        <div className={style.tagsBlock}>
                            {item.tags.map((i, index) => {
                                if (index < 5) {
                                    return <div className={style.tagItem}>
                                        {i.title}
                                    </div>
                                }
                            })}
                        </div>
                    </div>
                    <div className={style.imgBackground}>
                        <img src={item.urls.regular} alt="" />
                        <div className={style.imgShadow}>&nbsp;</div>
                    </div>
                </div>
                <div>
                    <PhotosList photosList={collection} />
                </div>
            </div>
        </>)
    } else {
        return null
    }
}

export default PhotoPage
