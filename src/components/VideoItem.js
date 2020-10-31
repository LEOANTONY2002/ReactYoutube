import React from 'react';
import './VideoItem.css';

const VideoItem = ({video , onVidSel }) => {
    return (
        <div onClick={ () => onVidSel(video) } className="vi item">
           <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
           <div className="content">
              <div className="header">{video.snippet.title}</div>
           </div>
        </div>
    );
}

export default VideoItem;