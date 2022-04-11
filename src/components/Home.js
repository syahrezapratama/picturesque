import React, { useState, useEffect } from 'react';

import Hero from './Hero';
import Searchbar from './Searchbar';
import Grid from './Grid';
import Thumbnail from './Thumbnail';
import Button from './Button';
import Spinner from './Spinner';

import API from '../config/API';

export default function Home() {

    const initialResult = {
        page: 0,
        images: []
    }

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(initialResult)
    const [imageList, setImageList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadMoreImages, setLoadMoreImages] = useState(false);


    // get images from the Unsplash editorial feed
    const fetchImages = async () => {
        try {
            setLoading(true);
            const images = await API.fetchImages();
            setImageList(images);
        }
        catch (error) {
            console.log(error);
        }
        setLoading(false);
    }
    
    // search images
    const searchImages = async (searchTerm, page) => {
        try {
            const result = await API.searchImages(searchTerm, page);
            setSearchResults(prevResult => ({
                page: page,
                images: page > 1
                    ? [...prevResult.images, ...result.results]
                    : [...result.results]
            }));
        }
        catch (error) {
            console.log(error);
        }
    }

    // initial render home page and search results
    useEffect(() => {
        // if there is a search term, render the search results
        if (searchTerm) {
            searchImages(searchTerm, 1);
        }
        else {
            fetchImages();
        }
    }, [searchTerm])

    // load more search results
    useEffect(() => {
        if (!loadMoreImages) {
            return;
        }
        searchImages(searchTerm, searchResults.page + 1);
        setLoadMoreImages(false);
    }, [loadMoreImages, searchTerm, searchResults.page]);


    // get search term from the search bar component
    function getSearchTerm(query) {
        setSearchTerm(query);
    }
    
    const imageListElement = imageList.map(image => {
        return (
            <Thumbnail 
                key={image.id}
                id={image.id}
                url={image.urls.small}
            />
        )
    })

    const searchResultElements = searchResults.images.map(image => {
        return (
            <Thumbnail 
                key={image.id}
                id={image.id}
                url={image.urls.small}
            />
        )
    })

    console.log(searchResults);

    return (
        <>
            { !searchTerm && <Hero /> }
            <Searchbar onSubmit={getSearchTerm} />
            <Grid>
                { !searchTerm ? imageListElement : searchResultElements }
            </Grid>
            { loading && <Spinner/>  }
            { searchTerm && <Button text='Load more images' callback={() => setLoadMoreImages(true)} />}
        </>
        
    );
}