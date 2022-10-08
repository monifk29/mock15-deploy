import React, { useState } from 'react'
import { Box ,Input,Select,Button,Heading} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [name,setName] = useState()
    const [dif,setDif] = useState()

const nav = useNavigate()

    const handleClick = () => {

        localStorage.setItem("m14-cur-user",JSON.stringify(name));
        localStorage.setItem("m14-cur-dif",JSON.stringify(dif));
        

        nav("/playzone")
    }
  return (
    <div style={{width : "50%", margin : "auto",marginTop : "150px"}}>
<Box w="60%" margin="auto" bg="teal" p={6} >

    <Heading size="md" color="white">Choose your Game level</Heading>
<Input backgroundColor="white " width="60%" marginTop="25px" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
<Select width="60%" color="black" margin="auto" backgroundColor = "white" marginTop="25px" placeholder='Select Difficulty' onChange={(e) => setDif(e.target.value)}>
  <option value='easy'>Easy</option>
  <option value='med'>Medium</option>
  <option value='hard'>Hard</option>
</Select>
<Button marginTop="25px" backgroundColor="white "  variant="outline"  onClick={handleClick}>Submit</Button>
</Box>

    </div>
  )
}

export default Home