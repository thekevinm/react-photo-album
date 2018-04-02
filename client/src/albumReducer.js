const initialState = {
	albums: [],
	currentAlbum: {
		pictures: [],
		albumName: ""
	},
	picture: {
		albumId: null,
		id: null,
		name: "",
		image:""
	}
}

export default function(state = initialState, action) {
	switch(action.type) {
		case 'GET_ALBUMS':
			return {...state, albums: action.payload}
		case 'GET_ALBUM':
			return {...state, currentAlbum: action.payload}
		case 'GET_PHOTO':
			return {...state, picture: action.payload}
		default:
			return state
	}
}