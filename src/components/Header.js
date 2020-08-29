import React, { Fragment } from 'react'

const Header = () => {
    return ( 
        <Fragment>
            <header className='bg-dark'>
                <div className="logo">
                    <p>App Pixabay</p>
                </div>
                <nav>
                    <a href="#!">Inicio</a>
                </nav>
            </header>
        </Fragment>
     );
}
 
export default Header;