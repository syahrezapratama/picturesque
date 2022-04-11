// configuration file for API
const API_URL = 'https://api.unsplash.com/';
const ACCESS_KEY = 'wfBwTqymsPXU1GwT16QQwT-DB9dUbDDh8DaNMfckEhE';

const apiSettings = {

    // fetch images from the Unsplash editorial feed
    fetchImages: async () => {
        const endpoint = `${API_URL}photos/?client_id=${ACCESS_KEY}&per_page=20`;
        return await (await fetch(endpoint)).json();
    },
    
    // search images
    searchImages: async (searchTerm, page) => {
        const endpoint = `${API_URL}search/photos/?client_id=${ACCESS_KEY}&query=${searchTerm}&page=${page}`;
        return await (await fetch(endpoint)).json();
    },
    
    // fetch a single image
    fetchImage: async (imageId) => {
        const endpoint = `${API_URL}photos/${imageId}/?client_id=${ACCESS_KEY}`;
        return await (await fetch(endpoint)).json();
    }
};

export default apiSettings;
