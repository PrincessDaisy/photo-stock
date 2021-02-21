import React from 'react'

const SearchResult = (props) => {
    console.log(props)
    return <div className="container">
        <div style={{ display: "flex" }}>
            <div>
                {!!props.photosList &&
                    props.photosList.map((item, index) => {
                        if (index % 3 == 2) {
                            return <div key={item.id} style={{padding: "5px"}}><img src={item.urls.small} alt="" /></div>
                        }
                    })
                }
            </div>
            <div>
                {!!props.photosList &&
                    props.photosList.map((item, index) => {
                        if (index % 3 == 1) {
                            return <div key={item.id}style={{padding: "5px"}}><img src={item.urls.small} alt="" /></div>
                        }
                    })
                }
            </div>
            <div>
                {!!props.photosList &&
                    props.photosList.map((item, index) => {
                        if (index % 3 == 0) {
                            return <div key={item.id}style={{padding: "5px"}}><img src={item.urls.small} alt="" /></div>
                        }
                    })
                }
            </div>
        </div>
    </div>
}

export default SearchResult