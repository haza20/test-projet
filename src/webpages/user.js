
import React, { useState, useEffect }  from 'react';
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom';
import profileImage from '../icons/idcard.png';
import  './style.css';

const User = props => {
   // var id = props.match.params.id
   let {id} = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState([]);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + id)
            .then(res => res.json())
            .then(
                (data) => {
                   
                    setUser(data);
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []) 
       if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
        return <div>Loading...</div>;
    }  
    
    if (user) {
        return (
            
            <div >
                <div>
                <img className="photo" src={profileImage} width/>
                </div>
                <div  className="h3">
                <div>
                <h1 > <Link to={`/posts/${user.id}`}>{user.name}</Link></h1>
                </div>
                <div>
                    Email: {user.email}
                </div>
                <div>
                    Phone: {user.phone}
                </div>
                <div>
                    Website: {user.website}
                </div>
                </div> 
                 </div> 
                      );
    }
}
export default User;