import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
const PC = () => {

    const [data,setData]=useState([])


    useEffect(() => {
        axios.get("https://63c2f510b0c286fbe5f6dd9f.mockapi.io/PS3")
        .then((res)=>{
            setData(res.data)
        })
    }, []);

    return (
        <>
            <h1 className='new'>PS3</h1>
             <div className="games">
            {
                (data.length>0)&& data.map((games,index)=>{
                    return(
                        <Link className='card' to={`/info/${games.category}/${games.id}`}>
                            <img src={games.img} alt="name"/>
                            <h2>{games.name}</h2>
                        </Link>
                    )
                })
            }
            </div>
        </>
    );
}

export default PC;
