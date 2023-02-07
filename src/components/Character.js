// Write your Character component here
import React from "react";
import styled from "styled-components";
import App from "../App";

const ProfileBox = styled.div`
    width: 40%;
    padding: 1px;
    margin: 20px;
    color: white;
    border-radius: 15px;
    background-color: rgba(13, 13 ,13, .35);
    
`


const Character = ({ char }) => {
    return (
        <ProfileBox>
            <h2>{char.name}</h2>
        </ProfileBox>
    )
}




export default Character;