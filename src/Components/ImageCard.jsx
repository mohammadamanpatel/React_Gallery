import React from 'react'
import { useNavigate } from 'react-router-dom';

export const ImageCard = (props) => {
    const id = props.id;
    const imageUrl = props.imageUrl;
    console.log("prop in image Card", id,imageUrl);
    const navigate = useNavigate();
    function redirect(){
      console.log('id',id);
      navigate(`${id}`);
    }
    return (
        <div>
            <img src={imageUrl} onClick={redirect}/>
        </div>
    )
}
