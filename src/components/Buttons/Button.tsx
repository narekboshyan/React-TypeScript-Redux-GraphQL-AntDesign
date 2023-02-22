import React from "react";
import { Button as AntButton } from "antd";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return <AntButton>{text}</AntButton>;
};

export default Button;
