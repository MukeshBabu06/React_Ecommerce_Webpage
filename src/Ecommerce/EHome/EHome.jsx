import React, {useState} from "react";
import Searchbr from "./Searchbar";
import Carsol from "./Carsol";
import Displaycard from "./Displaycard";
import Mtshirt from "../MenTshirt";

const EHome=({addCart})=>{

    
    return(
        <div>
            <Searchbr/>
            <Carsol/>
            <Displaycard/>
            <Mtshirt addCart={addCart}/>
        </div>
    )
} 
export default EHome;