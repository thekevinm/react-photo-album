import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import axios from 'axios'

class Home extends Component {
	state ={
		albums: []
	}
	componentDidMount() {
		axios.get('http://localhost:3001/albums').then(resp => {
			this.setState({
				albums: resp.data
			})
		})
	}

	render() {
		return (
			<div id="bigContainer">

				<header>
					<h1>My Albums</h1>
				</header>

				{this.state.albums.map(pic => (
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

export default Home