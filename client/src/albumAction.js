import store from './store'
import axios from 'axios'

export function getAlbums() {
	axios.get('http://localhost:3001/albums').then(resp => {
		store.dispatch({
			type: 'GET_ALBUMS',
			payload: resp.data
		})
	})
}

export function getAlbum(id) {
	axios.get(`http://localhost:3001/albums/${id}?_embed=pictures`).then(resp => {
		store.dispatch({
			type: 'GET_ALBUM',
			payload: {
				pictures: resp.data.pictures,
				albumName: resp.data.name
			}
		})	
	})
}

export function getPhoto(id) {
	axios.get(`http://localhost:3001/pictures/${id}`).then(resp =>{
		store.dispatch({
			type: 'GET_PHOTO',
			payload: resp.data
		})
	})
}
