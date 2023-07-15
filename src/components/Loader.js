import React from 'react';
import './Loader.css';
import '../../public/loader.svg';

const Loader = ({renderStatus }) => {
    
    //show loader untill array is loaded
    if(!renderStatus){
	return (
        <div className="loader" id="loader">
        <img src="loader.svg" alt="loading" />
        </div>
    )}
};

export default Loader;
