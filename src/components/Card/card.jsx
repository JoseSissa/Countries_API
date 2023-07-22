import React from 'react';

function Card( capital, name, population, region ) {
    console.log('Hello world');
    console.log(capital, name, population, region);
    return ( 
        <section>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h3>{ name }</h3>
                <p>{ population }</p>
                <p>{ region }</p>
                <p>{ capital }</p>
            </div>
        </section>
    );
}

export default Card;