import axios from 'axios';
import React,{useState,useEffect} from 'react';
import PC from '../components/PC';
import {Link} from 'react-router-dom'




const Game = () => {

    const [data,setData]=useState([])


    useEffect(() => {
        axios.get("https://6373fe5e716c2e1916559a01.mockapi.io/PC")
        .then((res)=>{
            console.log(res);
            setData(res.data)
        })
    }, []);

    return (
        <>
        <div className='corobka pr'>
        <h2 className='welcome'>Game</h2>
            <p className='estrix'>eSTRIX Game Store</p>
            <p className='trade'>Choose your copy of game bassed on the platform(s)</p>
        </div>
        <h1 className='new'>PC</h1>
        <div className="games">
            {
                (data.length>0)&& data.map((games,index)=>{
                    return(
                       <Link className='card' to={`/info/${games.category}/${games.id}`}>
                            <img src={games.img} alt="name" />
                            <h2>{games.name}</h2>
                        </Link>
                    )
                })
            }
        </div>
        <PC></PC>
        <PC></PC>
        </>
    );
}

export default Game;

