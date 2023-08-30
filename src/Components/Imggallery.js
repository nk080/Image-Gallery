import { Images } from './Gallery';
import ImageGallery from 'react-image-gallery';
import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import './styles.css'

class PhotoGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    render() {
        return (
            <>
                <div>
                    <h1>Custom Image Gallery</h1>
                    <div className='img'>
                        <ImageGallery showThumbnails={true} items={Images} />
                    </div>
                </div>
            </>
        );
    }
}
export default PhotoGallery;
