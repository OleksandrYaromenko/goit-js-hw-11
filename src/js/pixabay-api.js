export function requestPictures(query) {
    const BASE_URL = "https://pixabay.com/api/";
    const API_KEY = '43436630-0ca2cab0bed204149ca1c5fee'
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
    });
    return fetch(`${BASE_URL}?${params}`)
        .then(response => {
        if (!response.ok) {
            throw new Error(response.status)
        }
        return response.json();
                
        })
    

}