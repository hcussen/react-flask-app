import "./GoalCard.css";
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Checkout from "../Checkout";

const GoalCard = ({ productID }) => {
  const [currentProd, setCurrentProd] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fetch(`/prod/${productID}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentProd(data.prod);
      });

    fetch(`/prodprice/${productID}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentPrice(data.price.data[0]);
      });

    //fetch the progress amount
    fetch(`/progress${productID === "prod_Hnyn5deSyBNjBC" ? "cat" : "dog"}`)
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        setProgress(data);
      });
  }, [productID]);

  console.log(progress);

  return (
    <Card style={{ width: "80%" }}>
      <Card.Body>
        <Card.Title>{currentProd.name}</Card.Title>
        <Card.Subtitle>${currentPrice.unit_amount / 100}</Card.Subtitle>
        <ProgressBar now={progress} label={`${progress}%`} />
        <Card.Text>{currentProd.description}</Card.Text>
        <Checkout productID={currentPrice.id}>Donate </Checkout>
      </Card.Body>
    </Card>
  );
};

export default GoalCard;
