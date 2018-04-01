import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import axios from 'axios'
import './Photo.css'

class Photo extends Component {
	state = {
		picture: ''
	}
	componentWillMount(){
		const id = this.props.match.params.id
		axios.get(`http://localhost:3001/pictures/${id}`).then(resp =>{
			this.setState({
				picture: resp.data
			})
		})
	}


	render(){
		return(
			<div>
				
				<header id="photoPage">
				<div id="back">
				<Link to={'/albums/' + this.state.picture.albumId}>
				<p className="backButton">Back</p>
				</Link>
				</div>
				<h3 id="mainName">{this.state.picture.name}</h3>
				</header>

				<div id="previous">
				<Link to={'/photo/' + this.state.picture.id}>
				<button id="prev">Previous</button>
				</Link>

				<Link to={'/photo/' + this.state.picture.id}>
				<button id="next">Next</button>
				</Link>

				</div>

				<img id="mainPic"src={this.state.picture.image} />

				<footer>
				<h6>Kay Designs&#174;</h6>
				</footer>

			</div>
		)
	}
}

export default withRouter(Photo)