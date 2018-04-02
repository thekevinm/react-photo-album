import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import {getAlbums} from './albumAction'
import {connect} from 'react-redux'

class Home extends Component {
	componentDidMount() {
		getAlbums()
	}

	render() {
		return (
			<div id="bigContainer">

				<header>
					<h1>My Albums</h1>
				</header>

				{this.props.albums.map(pic => (
					<div key={'albums' + pic.id} className="albumContainer">
					<Link to={`/albums/${pic.id}`} style={{textDecoration: 'none'}}>
						<img src={pic.cover} />
						<p>{pic.name}</p>
					</Link>
					</div>
					))}

				<footer>
					<h6>Kay Designs&#174;</h6>
				</footer>

			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		albums: state.albums
	}
}

export default connect(mapStateToProps)(Home)