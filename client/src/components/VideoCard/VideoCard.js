import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import './VideoCard.css'

const VideoCard = ({   
    title, 
    thumbnail,
    channelName, 
    channelImage,
    views, 
    length,
    timestamp }) => {
    return (
        <div className="videoCard">
            <div style={{ 
                backgroundImage: `url(${channelImage})`,
                height: "180px",
                width: "280px",
                borderRadius: "10px"
            }}
            >
                <div>
                    
                </div>
                <div className="videoCard__lengthContainer">
                    <span className="videoCard__length">{ length } </span>
                </div>
            </div>
            
            <div className="videoCard__info">
                <Avatar
                    className="videoCard__avatar"
                    alt={channelName}
                    src={thumbnail}
                />
                <div className="videoCard__text">
                    <h4><a href="" className="videoCard__title">{title}</a></h4>
                    <p>{channelName}</p>
                    <p>
                        {views} * {timestamp}
                    </p>
                </div>              
            </div>           
        </div>
    )
}

export default VideoCard;
