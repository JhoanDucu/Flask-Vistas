import axios from "axios";

const getCharacter = (page) => axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
const getLocation = (page) => axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
const getEpisode = (page) => axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);

export {
    getCharacter,
    getLocation,
    getEpisode
};