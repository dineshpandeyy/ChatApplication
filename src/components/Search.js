import React from 'react'

const Search = () => {
  return (
    <div className="search">
        <div className="searchForm">
            <input className="inputBenzema" type="text" placeholder="search the name"></input>
        </div>
        <div className="userChat">
            <img src="https://wallpaper.dog/large/17068480.jpg" alt="" />            
            <div className="userChatInfo">
                <span>Benzema</span>
            </div>
        </div>
    </div>
  )
}

export default Search