/* 템플릿과 서비스 연계 */

import AlbumService from "./album.service.js";
import albumListTmpl from "./templates/album-list.hbs";

class AlbumComponent {
    constructor (){
        this.albumService = new AlbumService();
        this.albumService.getAlbumList()
            .then(albumList => this.render(albumList));
    }
    render (albumList){
        const tmpl = albumListTmpl({albumList});
        document.getElementById('album-list').innerHTML = tmpl;
    }
}

export default AlbumComponent;