import React from 'react';

const Body = ({event}) => {
  return (
    <div className="col-md-3">
        <img style={{height:'300px'}} src={event.imageURL} alt=""/>
    </div>
  );
};

export default Body;