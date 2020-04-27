import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';
const ImageList = (props) => {
    const images = props.images.map(x => {
        return <ImageCard key={x.id} image={x} />
    });
    return (
        <div className="image-list">
            {images}
        </div>
    );
}
export default ImageList;