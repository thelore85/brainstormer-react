import React from 'react';
import NavHero from './NavHero';
import NavSticky from './NavSticky';

const Header = ({ onInputChange, clickSearchButton, hitEnter }) =>{

    return(
    <section className=''>
        <NavHero onInputChange={onInputChange} clickSearchButton={clickSearchButton} hitEnter={hitEnter} />
        <NavSticky onInputChange={onInputChange} clickSearchButton={clickSearchButton} hitEnter={hitEnter} />
    </section>
    )
}
export default Header;