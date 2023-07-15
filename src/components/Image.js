import React from 'react';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import './Image.scss';


const Image = ({ src, onImgLoad }) => {

	const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


	return(
	<div className="image-wrapper">
		<img className="image-item" src={src.regular} onLoad={onImgLoad} onClick={handleShow}/>

		{/* image menu */}
		<div className="info" hidden>
			<div className="info-content">
					<i className="icon-maximize fa-solid fa-maximize" onClick={handleShow}></i>
			</div>
		</div>


		<Modal  show={show} onHide={handleClose} dialogClassName="modal-250w" aria-labelledby="example-custom-modal-styling-title" >
			<Modal.Body>
				<img className="image-item img-fluid" src={src.regular} onClick={handleClose}/>
			</Modal.Body>
		</Modal>

	</div>
	)
}

export default Image;
