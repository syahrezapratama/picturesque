import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import API from '../config/API';
import Spinner from './Spinner';

export default function Image(props) {

    const { imageId } = useParams();

    const [imageData, setImageData] = useState({});

    useEffect(() => {
        const fetchMovie = async (imageId) => {
            try {
                const result = await API.fetchImage(imageId);
                setImageData({
                    id: result.id,
                    description: result.description,
                    url: result.urls.regular,
                    artist: result.user.name
                });
            }
            catch (error) {
                console.log(error);
            }
            
        }
        fetchMovie(imageId);
    }, [imageData]);


    return (
        <div className='image-page center'>
            <div className='image-container'>
                <img src={imageData.url} />
            </div>
            <div className='image-info'>
                <h4>Photo by {imageData.artist}</h4>
                {
                    imageData.description && <p>"{imageData.description}"</p>
                }
            </div>
        </div>
    );
}