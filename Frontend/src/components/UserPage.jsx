import React, { useEffect, useState } from "react";
import UserHeader from "./UserHeader";
import { Button, Container, useToast } from "@chakra-ui/react";
import axios from "axios";
import BASE_URL from "../config";

function UserPage() {
  // const [userData, setUserData] = useState(""); 
  // const toast = useToast();

  // useEffect(() => {
  //   axios.get(`${BASE_URL}/user-posts`, {
  //     withCredentials: true
  //   })
  //   .then((res) => {
  //     console.log(res.data)
  //     // setUserData(res.data);
  //   })
  //   .catch((error) => {
  //     console.log(error.message)
  //     toast({
  //       status: "error",
  //       description: error.response.data.error,
  //       duration: 3000,
  //       isClosable: true,
  //     });
  //   });
  // }, []); 

  return (
    <>
      <UserHeader/>
      <Container maxW="50vw">
        <div className="investor-posts">
          {/* <h2>Welcome, {userData}</h2> */}
          <h2>Helloh</h2>
        </div>
      </Container>
    </>
  );
}

export default UserPage;
