import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'



const DetailsGame = () => {
    const [data,setData]=useState([])
    const {id}=useParams()

    useEffect(() => {
        axios.get('https://6373fe5e716c2e1916559a01.mockapi.io/PC/' +id)
        .then((res)=>{
            console.log(res);
        })
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default DetailsGame;
