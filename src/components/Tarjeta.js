import React, { Fragment } from 'react'

const Tarjeta = ( {images} ) => {
    // previewURL views
    const { tags, webformatWidth, 
            webformatHeight, largeImageURL, 
            views, likes, comments
    } = images

    return ( 
        <Fragment>
            <a href='#!'
                width={webformatWidth} 
                height={webformatHeight}
                className='padreTarjeta'
            >
                <img className='img' 
                    width={webformatWidth} 
                    height={webformatHeight}
                    src={largeImageURL} 
                    alt={tags} 
                />
                <div className="muestra"
                >
                    <div>
                        <p>
                            <span role="img" aria-labelledby >👍</span> <span>{likes}</span>
                        </p>
                    </div>
                    <div>
                        <p>
                         <span role="img" aria-labelledby>⌨</span> <span>{comments}</span>
                        </p>
                    </div>
                    <div>
                        <p>
                         <span role="img" aria-labelledby>👀</span> <span>{comments}</span>
                        </p>
                    </div>
                </div>
            </a>
        </Fragment>
     );
}
 
export default Tarjeta;