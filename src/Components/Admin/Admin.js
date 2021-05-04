import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../FireBaseConfig/FireBase.config';


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}


const Admin = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [imageURL, setImageURL] = useState(null)

  const onSubmit = data => {
    const eventData = {
      name: data.name,
      imageURL: imageURL
    }
    const url = `http://localhost:8000/Admin`;

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => console.log('server side', res))
  };

  const handelImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', 'cefd76bd665f6701d73572e94cea99c2');
    imageData.append('image', event.target.files[0])


    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  const [user, setUser] = useState({})
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;

        console.log(user);

        setUser(user);

      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;

        console.log(errorMessage, errorCode,email);

      });
  }
  return (
    <div>
      <h1>Add Your Books Here</h1>
      <button onClick={handleGoogleSignIn}>Google Sign in</button>
      <h2>User Name: {user.displayName}</h2>
      <h3>Email: {user.email}</h3>
      <img src={user.photoURL} alt=""/>

      <form onSubmit={handleSubmit(onSubmit)}>
        <br />
        <input name="name" defaultValue="Exciting event" {...register} />
        <br />
        <input name="exampleRequired" type="file" onChange={handelImageUpload} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Admin;