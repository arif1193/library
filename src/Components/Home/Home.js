import React, { useEffect, useState } from 'react';
import Body from '../Body/Body';

const Home = () => {

    const [events, setEvents] = useState([])

    useEffect(() =>{
        fetch('http://localhost:8000/events')               
        .then(res => res.json())
        .then(data => setEvents(data))
    },[])


    return (
        <div className="row">
               {
                   events.map(event => <Body event={event}></Body> )
               }
        </div>
    );
};

export default Home;