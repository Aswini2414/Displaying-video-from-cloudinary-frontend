import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BASE_URL } from "./helper";

const Dashboard = () => {
    const [data, setData] = useState([]);
    const location = useLocation();
    console.log(location);
    const id = location.state.userdata._id;
    const getUserData = async () => {
        const response = await axios.get(`${BASE_URL}/getdata`);
        setData(response.data);
    }
    useEffect(() => {
        getUserData();
    }, []);
  console.log(id);
  const finalUser = data.filter((user) => user._id === id);
  console.log(finalUser);
  console.log(data);

    return <>
      {finalUser.map((user) => {
        const { title, image,_id } = user;
        return (
          <>
            <Link to="/video" state={{id:_id}}>
              <div className="content"
                // style={{
                //   backgroundImage: `url(${image})`,
                //   backgroundSize: "cover",
                //   backgroundRepeat: "no-repeat",
                //   backgroundPosition: "fixed",
                //   height: 800
                // }}
              >
                <img src={image} className="img"/>
                <h1 className="title">{title}</h1>
              </div>
            </Link>
          </>
        );
        })}
    </>
}

export default Dashboard;