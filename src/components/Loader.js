import React from 'react';
import './Loader.css';
import '../../public/loader.svg';

const Loader = ({firstLoad }) => {
    
    //show loader untill array is loaded
    if(!firstLoad){
	return (
        <div className="loader" id="loader">
        <img src="loader.svg" alt="loading" />
        </div>
    )}
};

export default Loader;
