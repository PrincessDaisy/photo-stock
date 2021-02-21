import React, { useState } from 'react'
import Photo from './Photo/Photo'
import style from './PhotosList.module.css'

const PhotosList = (props) => {
    const [dir, setDir] = useState(style.dirRow);
    const changeDirRow = () => {
        setDir(style.dirRow)
    }
    const changeDirCol = () => {
        setDir(style.dirCol)
    }
    return <div className="container">
        <div className={style.dirControl}>
            <div className={style.column} onClick={changeDirCol}>
                <span className={style.columnEl}>&nbsp;</span>
                <span className={style.columnEl}>&nbsp;</span>
            </div>
            <div className={style.row} onClick={changeDirRow}>
                <div className={style.rowTop}>
                    <span className={style.rowEl}>&nbsp;</span>
                    <span className={style.rowEl}>&nbsp;</span>
                </div>
                <div className={style.rowBot}>
                    <span className={style.rowEl}>&nbsp;</span>
                    <span className={style.rowEl}>&nbsp;</span>
                </div>
            </div>
        </div>
        <div className={dir}>
            <div className="col-md-4 p-0">
                {!!props.photosList &&
                    props.photosList.map((item, index) => {
                        if (index % 3 == 2) {
                            return <Photo item={item} />
                        }
                    })
                }
            </div>
            <div className="col-md-4 p-0">
                {!!props.photosList &&
                    props.photosList.map((item, index) => {
                        if (index % 3 == 1) {
                            return <Photo item={item} />
                        }
                    })
                }
            </div>
            <div className="col-md-4 p-0">
                {!!props.photosList &&
                    props.photosList.map((item, index) => {
                        if (index % 3 == 0) {
                            return <Photo item={item} />
                        }
                    })
                }
            </div>
        </div>
    </div>
}

export default PhotosList