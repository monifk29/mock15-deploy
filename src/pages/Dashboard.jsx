import React, { useEffect, useState } from 'react'
import axios from "axios"

import {  Box,Table,
    TableContainer,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    Td } from "@chakra-ui/react";

const Dashboard = () => {

    const [data,setData] = useState()

const getData = () => {
    axios.get(`https://ancient-caverns-16282.herokuapp.com/newMock15?_sort=score&_order=desc`).then((res)=>setData(res.data))
}


useEffect(() => {
getData()
},[])
  return (
    <div>

<Box margin="auto">
        {/* <h1 >Table</h1> */}
        <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Difficulty</Th>
              <Th>Score</Th>
          
            
              
            </Tr>
          </Thead>
          <Tbody data-cy="table-body">
            {/* map through the fetched country list, to form table rows */}
            {
              data?.map((item) => (
                <Tr key={item.id}>
                  <Td>{item.id}</Td>
                  <Td>{item.name}</Td>
                  <Td>{item.difficulty}</Td>
                  <Td>{item.score}</Td>
                  
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </TableContainer>

      </Box>

    </div>
  )
}

export default Dashboard