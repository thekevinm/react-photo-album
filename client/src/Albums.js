import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Albums.css'

class Albums extends Component {
	state ={
		pictures: [],
		albumName: []
	}
	componentDidMount() {
		const id = this.props.match.params.id
		axios.get(`http://localhost:3001/albums/${id}?_embed=pictures`).then(resp => {
			this.setState({
				pictures: resp.data.pictures,
				albumName: resp.data.name
			})
		})
	}
	componentWillReceiveProps(newprops) {
		const id = newprops.match.params.id
		axios.get(`http://localhost:3001/albums/${id}?_embed=pictures`).then(resp => {
		this.setState({
			pictures: resp.data.pictures,
			albumName: resp.data.name
			})
		})
	}
	render(){
		return(
			<div>
			
			<header>
				<h1>{this.state.albumName}</h1>
			</header>

			<nav className="side">
				// <Link to={"/"} style={{textDecoration: 'none'}}>Home</Link>
				// <Link to={"/albums/1"} style={{textDecoration: 'none'}}>Cars</Link>
				// <Link to={"/albums/2"} style={{textDecoration: 'none'}}>Music</Link>
				// <Link to={"/albums/3"} style={{textDecoration: 'none'}}>Outdoors</Link>
				// <Link to={"/albums/4"} style={{textDecoration: 'none'}}>Sports</Link>
				// <Link to={"/albums/5"} style={{textDecoration: 'none'}}>Liquor</Link>
				// <Link to={"/albums/6"} style={{textDecoration: 'none'}}>Icons</Link>
			</nav>
			
			{this.state.pictures.map(pics => (
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

export default Albums