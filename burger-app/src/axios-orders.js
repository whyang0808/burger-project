import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e6589.firebaseio.com/'
});

export default instance;