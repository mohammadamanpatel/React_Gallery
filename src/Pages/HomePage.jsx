import { useEffect, useState } from "react";
import { ImageCard } from "../Components/ImageCard"
import axios from 'axios'
import "../style/HomePage.css"


export const HomePage = () => {
    const [data, setData] = useState([]);
    const getData = async () => {
        const resp = await axios.get("https://api.slingacademy.com/v1/sample-data/photos?limit=20");
        console.log(resp.data.photos)
        const photos = resp.data.photos;
        setData(photos)
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div id="parent">
            {
            data?.map((e,i)=>{
              return <ImageCard id={e.id} imageUrl={e.url} key={i}/>
            })
          }
        </div>
    );
}
