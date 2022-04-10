import React from "react";
// import { CardAccount } from "../style";
import { Card } from "./style";

export const CardAccounts = ({url, title, text, btnName}) => {
  return (
    <Card>
      <Card.Img src={url} alt="img" />
      <Card.Title>{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
      <Card.Btn>{btnName}</Card.Btn>
    </Card>
  );
};

export default CardAccounts;
