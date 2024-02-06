import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../style/SinglePhoto.css'
import axios from 'axios';
export const SinglePhoto = () => {
  const { id } = useParams();
  // console.log("id in SinglePhoto",id);
  const[data,setData] = useState();
  const getData = async () => {
    const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
    console.log("data in singlePhoto", response.data.photo);
    setData(response.data.photo);
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <div id="singlePhoto">
      <img src={data?.url} alt="" />
      <div>
        <h1>{data?.title}</h1>
        <p>
          {data?.description}
        </p>
      </div>
    </div>
  )
}
