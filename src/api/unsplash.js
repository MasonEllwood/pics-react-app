import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID 6eb40795698624385d4d26918223e77ffdf781fc2b259831b568edf70b7a7c54'
    } 
});