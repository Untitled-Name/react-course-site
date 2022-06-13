import React, { useState, useEffect } from "react";

export default function FrontBanner(props){
    const {banners} = props;
    return (
        <div className="bannerContainer row">
            {banners.map((banner) => (
                <>
                    <img key={banner.id} src={banner.src} className='bannerImg'></img>
                </>
            ))}
        </div>
    )
}