import React from 'react';
import cat from './cat.jpg';

class Cats extends React.Component {
    render(){
        return(
            <div className="Cats">
                <h1>Cats!</h1>
                <img src={cat} height="500" width="700" alt="cat pic" />
            </div>
        );
    }
}

export default Cats;