import React, { useEffect } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Score = () => {
  const nav = useNavigate();

  var currUser = JSON.parse(localStorage.getItem("m14-cur-user"));
  var currDiff = JSON.parse(localStorage.getItem("m14-cur-dif"));
  var currScore = JSON.parse(localStorage.getItem("m14-cur-score"));

  console.log(currDiff, currUser, currScore);

 
  const postData = async () => {
    await axios.post("https://ancient-caverns-16282.herokuapp.com/newMock15", {
      name: currUser,
      difficulty: currDiff,
      score: currScore,
    });
  };

 useEffect(() => {
    postData()
 },[])

  function handleClick() {
    nav("/dash");
  }

  return (
    <div style={{margin :"auto",marginTop : "50px", backgroundColor : "thistle" , width : "40%", padding : "20px"}}>
      <h1 style={{fontSize : "large" , marginTop:"15px",  fontweight : "600",fontFamily : "sans-serif",textDecoration:"underline"}}>Score</h1>
      
      <h1 style={{fontSize : "large" , marginTop:"15px",  fontweight : "600",fontFamily : "sans-serif"}}>Hi {currUser},</h1>
      <h3 style={{fontSize : "large" , marginTop:"15px",  fontweight : "600",fontFamily : "sans-serif"}}>Your Score is : {currScore}</h3>
      <h4 style={{fontSize : "large" , marginTop:"15px",  fontweight : "600",fontFamily : "sans-serif"}}>You Played in difficulty level : {currDiff}</h4>,
      <Button marginTop="25px" color="black" onClick={handleClick}>Go to Dashboard</Button>
    </div>
  );
};

export default Score;
