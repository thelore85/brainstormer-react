//////////////////////////////////////////
// TO FIX
//- infinite scrolling on mobile


///////////////////////////////////////////
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
let inputSearchElement;

//////////////////////////////////////////
//////////////////////////////////////////

//COMPONTENTS START
class App extends Component{
	
// STATE setup
constructor(){
	super()
	this.state = {
		imgArray:[], //
		renderImage: false,
		firstLoad: false,
	}
};

// FETCHING IMG
getImagesFromApi(){
	// imgAggregator = imgAggregator.concat(imageDb)
	// this.setState({
	// 	imgArray: imgAggregator,
	// })

	// SEARCH QUERY URL
	fetch(`https://api.unsplash.com/search/photos?query=${userQueryInput}&client_id=${accessKey}&page=${page}&per_page=${count}`)
	.then(response => { return response.json()})
	.then(images => {imgAggregator = imgAggregator.concat(images.results); this.setState({ imgArray: imgAggregator,})});
}

// INFINITE SCROLLING
handleScroll = () => {
	let windowHeight =  document.body.offsetHeight - window.innerHeight;
	let scrollLevel = window.scrollY;

	if(scrollLevel === windowHeight & this.state.renderImage){
		this.setState({ renderImage: false }) // show loading
		
		console.log('scroll action page')
		page++;
		this.getImagesFromApi();
	};
}

// IMAGE LOAD and LOADING ANIMATION
onImgLoad = () => {
	loadingCounter++;

	if(loadingCounter >= count){
		loadingCounter = 0;
		this.setState({
			renderImage: true,
			firstLoad: true,
		});	
	}
}

// SEARCH QUERY
resetSearchParameter = () => {
	imgAggregator = [];
	page = 1;
	window.scrollTo(0,0);
}

onInputChange = (data) =>{
	userQueryInput = data.target.value;
	return{
		userQueryInput
	}
}

clickSearchButton = (data) => {
	if(userQueryInput !== ""){
		this.resetSearchParameter();
		this.getImagesFromApi();
		inputSearchElement[0].value = '';
		inputSearchElement[1].value = '';
	}
}

hitEnter = (data) => {
	if(data.keyCode === 13 && data.target.value !== ""){
		this.resetSearchParameter();
		this.getImagesFromApi();
		data.target.value = "";
	}
}

//////////////////////////////////////////
//////////////////////////////////////////

//COMPOPNENT DID MOUNT
componentDidMount(){
	this.getImagesFromApi();
	window.addEventListener('scroll', this.handleScroll);
	inputSearchElement = document.getElementsByClassName('header-search-input');
}

// RENDER THE COMPONENTS and pass parameters
render(){
		return(
			<div className="app-container" >
				<Loader  firstLoad={this.state.firstLoad}/>
				<Header onInputChange={this.onInputChange} clickSearchButton={this.clickSearchButton} hitEnter={this.hitEnter} />
				<ImageList onImgLoad={this.onImgLoad} imgArray={this.state.imgArray} maximizeImage={this.maximizeImage}/>
			</div>
		)
	}
}

export default App;

////////////////////////////////////////////