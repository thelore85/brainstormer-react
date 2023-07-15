///////////////////////////////////////////
// IMOPRT AND VARIABLES

import React, { Component } from 'react';
import { imageDb } from '../Db.js';

import Header from '../components/Header.js'
import ImageList from '../components/ImageList.js';
import Loader from '../components/Loader.js';
import './App.css';

//COMPONENT VARIABLES
let loadingCounter = 0;
let count = 12;
let page = 1;
let userQueryInput = 'random';
let accessKey = 'UB47zzyZZUCV5oltzO136BivI1u1oOQiO96YF7UeB7U';
let imgAggregator = []; //img aggregator: store all the img downloaded ==> pass it to the state "searchQuery"
let myModal;

//////////////////////////////////////////
//COMPONTENTS START
//////////////////////////////////////////

class App extends Component{
	
// STATE setup
constructor(){
	super()
	this.state = {
		imgArray:[], //
		render: false,
	}
};

// FETCHING IMG
getImagesFromApi(){
	// imgAggregator = imgAggregator.concat(imageDb)
	// this.setState({
	// 	imgArray: imgAggregator,
	// })

let url =`https://api.unsplash.com/search/photos?query=${userQueryInput}&client_id=${accessKey}&page=${page}&per_page=${count}`;

	// SEARCH QUERY URL
	fetch(`https://api.unsplash.com/search/photos?query=${userQueryInput}&client_id=${accessKey}&page=${page}&per_page=${count}`)
	.then(response => { return response.json()})
	.then(images => {imgAggregator = imgAggregator.concat(images.results); this.setState({ imgArray: imgAggregator,})});

	

	console.log('/// START DEBUGGING ////');
	console.log('url', url);
	console.log('query', userQueryInput);
	console.log('page', page);
	console.log('aggr img', imgAggregator);
	console.log('state img', this.state.imgArray);
	console.log('/// END DEBUGGING ////');

}

// INFINITE SCROLLING
handleScroll = () => {

let sum = window.innerHeight + window.scrollY ;
let body = document.body.offsetHeight;

if(sum >= body){
		page++;
		this.getImagesFromApi();
	};
}

// HIDE/SHOW LOADING ANIMATION
onImgLoad = () => {
loadingCounter++;

if(loadingCounter >= count){
	this.setState({
		render: true
	});
	
	loadingCounter = 0;
	}
}

// SEARCH QUERY MANAGEMENT
onInputChange = (data) =>{
	userQueryInput = data.target.value;
	return{
		userQueryInput
	}
}

onCLickRunQuery = () => {
	if(userQueryInput !== ""){
		imgAggregator = [];
		page = 1;
		window.scrollTo(0,0);
		this.getImagesFromApi();
	}

}

onInputHitEnter = (data) => {
	if(data.keyCode === 13 && data.target.value !== ""){
		imgAggregator = [];
		page = 1;
		window.scrollTo(0,0);
		this.getImagesFromApi();
		data.target.value = "";
	}
}



//COMPOPNENT DID MOUNT
componentDidMount(){
	this.getImagesFromApi();
	window.addEventListener('scroll', this.handleScroll);
}

// RENDER THE COMPONENTS and pass parameters
render(){
		return(
			<div className="app-container" >
				<Loader  renderStatus={this.state.render}/>
				<Header onInputChange={this.onInputChange} onCLickRunQuery={this.onCLickRunQuery} onInputHitEnter={this.onInputHitEnter} />
				<ImageList renderStatus={this.state.render} onImgLoad={this.onImgLoad} imgArray={this.state.imgArray} maximizeImage={this.maximizeImage}/>
			</div>
		)
	}
}

export default App;
////////////////////////////////////////////////