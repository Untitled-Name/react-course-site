import React, { useState, useEffect } from "react";

export default function FrontBanner(props){
    const {banners} = props;
    var [src, setSrc] = useState(banners[0]['src']);

    useEffect(() => {
        var i = 0;
        var interval = setInterval(() => {
            i++
            if (i >= 3){i = 0}
            setSrc(src = banners[i]['src'])
          }, 5000);
        
          return (
            
          ) => clearInterval(interval);
    }, []); 

    return (
        <div className="bannerContainerContainer">
            <div className="bannerContainer row">
                <img src={src} className='bannerImg'></img>
            </div>
        </div>
    )
}