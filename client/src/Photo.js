import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Photo.css'
import {getPhoto} from './albumAction'
import {connect} from 'react-redux'

class Photo extends Component {
	componentDidMount(){
		const id = this.props.match.params.id
		
		getPhoto(id)
	}


	render(){
		return(
			<div>
				
				<header id="photoPage">
				<div id="back">
				<Link to={'/albums/' + this.props.picture.albumId}>
				<p className="backButton">Back</p>
				</Link>
				</div>
				<h3 id="mainName">{this.props.picture.name}</h3>
				</header>

				<div id="previous">
				<Link to={'/photo/' + this.props.picture.id}>
				<button id="prev">Previous</button>
				</Link>

				<Link to={'/photo/' + this.props.picture.id}>
				<button id="next">Next</button>
				</Link>

				</div>

				<img id="mainPic" src={this.props.picture.image} />

				<footer>
				<h6>Kay Designs&#174;</h6>
				</footer>

			</div>
		)
	}
}
function mapStateToProps(state){
	return {
		picture: state.picture
	}
}

export default connect(mapStateToProps)(Photo)