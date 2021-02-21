import {instanceAPI} from './api'

 const PhotosAPI = {
    getPhotosList(page, query) {
        return instanceAPI.get('search/photos', {params: {page, query, per_page: 21}})
    },
    getTopicList(page) {
        return instanceAPI.get('topics', {params: {page}})
    },
    getPhoto(photoId) {
        return instanceAPI.get(`photos/${photoId}`)
    },
    getCollections(collectionId) {
        return instanceAPI.get(`collections/${collectionId}/photos`)
    }
}

export default PhotosAPI;
