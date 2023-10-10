import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { BASE_URL } from "./helper";

const Video = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const id = location.state.id;
  console.log(id);

    const getUserData = async () => {
      const response = await axios.get(`${BASE_URL}/getdata`);
      setData(response.data);
    };
    useEffect(() => {
      getUserData();
    }, []);
  
  const finalUser = data.filter((user) => user._id === id);
  return <>
      {
          finalUser.map((user) => {
              const { video } = user;
              return <>
                  <video width="100%" height="90%" controls className="video">
                    <source src={video} />
                </video>
                  </>
        
    })}
  </>
}

export default Video