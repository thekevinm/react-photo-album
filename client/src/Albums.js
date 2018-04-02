import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Albums.css'
import {getAlbum} from './albumAction'
import {connect} from 'react-redux'

class Albums extends Component {
	componentDidMount() {
		const id = this.props.match.params.id
		
		getAlbum(id)
	}

	componentWillReceiveProps(newprops) {
		const id = newprops.match.params.id
		if (this.props.match.params.id !== id) {
			getAlbum(id)	
		}
	}
	render(){
		return(
			<div>
			
			<header>
				<h1>{this.props.albumName}</h1>
			</header>

			<nav className="side">
				//<Link to={"/"} style={{textDecoration: 'none'}}>Home</Link>
				//<Link to={"/albums/1"} style={{textDecoration: 'none'}}>Cars</Link>
				//<Link to={"/albums/2"} style={{textDecoration: 'none'}}>Music</Link>
				//<Link to={"/albums/3"} style={{textDecoration: 'none'}}>Outdoors</Link>
				//<Link to={"/albums/4"} style={{textDecoration: 'none'}}>Sports</Link>
				//<Link to={"/albums/5"} style={{textDecoration: 'none'}}>Liquor</Link>
				//<Link to={"/albums/6"} style={{textDecoration: 'none'}}>Icons</Link>
			</nav>
			
			{this.props.pictures.map(pics => (
			<Link key={'image' + pics.id} to={"/photo/" + pics.id}>
			<div className="albumsContainer">
			<img src={pics.image} />
			<p className="picName">{pics.name}</p>
			</div>
			</Link>
			))}

			<footer>
				<h6>Kay Designs&#174;</h6>
			</footer>

			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		pictures: state.currentAlbum.pictures,
		albumName: state.currentAlbum.albumName
	}
}

export default connect(mapStateToProps)(Albums)