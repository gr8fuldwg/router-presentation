import React from 'react';
import cat from './cat.jpg';
import badcat from './badcat.jpg';

class Cats extends React.Component {
    render(){
        return(
            <div className="Cats">
                <h1>.....cats</h1>
                <img src={cat} height="500" width="700" alt="cat pic" />
                <hr />
                <img src={badcat} height="430" width="760" alt="bad cat pic" />
            </div>
        );
    }
}

export default Cats;