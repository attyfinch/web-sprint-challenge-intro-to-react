// Write your Character component here
import React from "react";
import styled from "styled-components";
import App from "../App";

const Character = ({ char }) => {
    return (
        <h2>
            {char.name} {char.birth_year} {char.gender}
        </h2>
    )
}




export default Character;