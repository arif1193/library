import React from 'react';

const Body = ({event}) => {
  return (
    <div className="col-md-3">
        <img style={{height:'300px'}} src={event.imageURL} alt=""/>
        <button style={{textAlign:'left'}}>Add Button</button>
    </div>
  );
};

export default Body;