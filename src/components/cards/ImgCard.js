import React, { Component } from 'react'
import DztImageGalleryComponent from "reactjs-image-gallery";
import './ProjectCard.css';

class ImgCard extends Component {
    render() {
        var data = [
            {
                url: "https://ko2m0.github.io/rocks/images/wd_project1_600_1.jpg",
                title: "",
                thumbUrl: "https://ko2m0.github.io/rocks/images/wd_project1_400_1.jpg",
            },
            {
                url: "https://ko2m0.github.io/rocks/images/wd_project2_600_1.jpg",
                title: "",
                thumbUrl: "https://ko2m0.github.io/rocks/images/wd_project2_400_1.jpg",
            },
            {
                url: "https://ko2m0.github.io/rocks/images/wd_project3_600_1.jpg",
                title: "",
                thumbUrl: "https://ko2m0.github.io/rocks/images/wd_project3_400_1.jpg",
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