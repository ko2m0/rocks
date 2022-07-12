import React, { Component } from 'react'
import DztImageGalleryComponent from "reactjs-image-gallery";

class ImgCard extends Component {
    render() {
        var data = [
            {
                url: "https://casadelaguacate.com/sitioweb2/media/img/letsgettech1.png",
                title: "",
                thumbUrl: "https://via.placeholder.com/400",
            },
            {
                url: "https://casadelaguacate.com/sitioweb2/media/img/letsgettech1.png",
                title: "",
                thumbUrl: "https://via.placeholder.com/400",
            },
            {
                url: "/images/wdev_project3_600_1.jpg",
                title: "",
                thumbUrl: "/images/wdev_project3_400_1.jpg",
            }
        ];

        return (
            <div>
                <DztImageGalleryComponent images={data} hideDownload='true' hideZoom='true' hideRotate='true'/>
            </div>
        )
    }
}

export default ImgCard;