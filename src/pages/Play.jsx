import React, { useEffect, useState } from "react";
import { Box, Button, Alert, AlertIcon } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Timer from "../components/Timer";

const Play = () => {
  const [given, setGiven] = useState();
  const [score, setScore] = useState(0);
 

  var currUser = JSON.parse(localStorage.getItem("m14-cur-user"));
  var currDiff = JSON.parse(localStorage.getItem("m14-cur-dif"));
  console.log(currDiff);

  const nav = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  function submit() {
    nav("/score");
  }

  if (currDiff == "hard") {
    setTimeout(submit,10000);
  }
  if (currDiff == "med") {
    setTimeout(submit, 30000);
  }
  if (currDiff == "easy") {
    setTimeout(submit, 40000);
  }



  var getData = async () => {
    await axios
      .get("https://api.api-ninjas.com/v1/randomword")
      .then((res) => setGiven(res.data.word));
  };

  // console.log(given);

  if (given != undefined) {
    var word = document.getElementById("given");
    word.innerText = given;
  }

  var arr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var ans = [];

  const handleClick = (e) => {
    ans.push(e);
    //   console.log(ans);
    //   localStorage.setItem("m14-currentAns",JSON.stringify(ans));

    //   var answer = JSON.parse(localStorage.getItem("m14-currentAns"));

    var contain = document.getElementById("contain");

    if (ans.length <= given.length) {
      var x = document.createElement("p");
      x.innerText = e;

      contain.append(x);

      if (ans.length == given.length) {
        //   console.log("1", given);
        var check = ans.join("");
        if (check == given) {
          console.log("yes");
          setScore(score + given.length);
        
        alert("Wow...!!!Your Response is Correct");
       contain.innerHTML = ""
        getData()
        } else {
          console.log("No");
          setScore(score - given.length);

          alert("Sorry...!!!Your Response is Wrong");
          contain.innerHTML = ""
           getData()
        }
      }
    }
  };

  console.log(score);
  localStorage.setItem("m14-cur-score",JSON.stringify(score));

  return (
    <div style={{marginTop : "25px"}}>
      <h1 style={{fontSize : "large" ,fontWeight : "600", color : "teal", textDecoration : "underline"}}>Hi {currUser}, Your Game is started</h1>
      <h2><Timer/></h2>
      <div style={{display : "flex", textAlign : "center" , alignItems : "center" , justifyContent: "center"}}>
        <h2 style={{fontSize : "large" ,fontWeight : "500"}}>Given Word :</h2>
        <p id="given" style={{fontSize : "large" ,fontWeight : "600", marginLeft : "10px", textDecoration : "underline"}}></p>
      </div>
      <div id="contain" style={{fontSize : "large", color : "blue" ,fontWeight : "400",textDecoration : "underline", display: "flex", textAlign : "center" , alignItems : "center" , justifyContent: "center" }}></div>
      <Box w="60%" margin="auto" marginTop = "30px" >
        <Grid templateColumns="repeat(8, 1fr)" gap={3}>
          {arr.map((e) => (
            <Button onClick={() => handleClick(e)}>{e}</Button>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Play;
