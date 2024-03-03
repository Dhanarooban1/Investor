import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import BASE_URL from "../config";
import { Button ,Container} from "@chakra-ui/react";

const InvestorPage = () => {
  const location = useLocation();
  const stock = location.state?.investor;

  return (
    <Container maxW="50vw">
      <div className="investor-posts">
        <h2>{stock.stockName}</h2>
        {stock.posts.map((post, index) => (
          <div key={index} className="post">
            <h3>{post.investorName}</h3>
            <p>{post.post_text}</p>
            <Button>hELLO </Button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default InvestorPage;
