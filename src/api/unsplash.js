import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization:
      'Client-ID 3235a2cf9bdf8b317b2d17e9125b12bd9efab8fcaec11a5963e8a83935e8a972'
  }
});
