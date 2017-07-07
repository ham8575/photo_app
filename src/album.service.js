import axios from "axios";

class AlbumService {
    getAlbumList (){
        return axios
        .get("http://jsonplaceholder.typicode.com/albums")
        .then (response => response.data);
    }
}

export default AlbumService;