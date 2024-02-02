/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Flex } from 'antd';

const Buttons = ({type, name, onClick, style = {}}) => (
  <Flex gap="small" wrap="wrap" style={style}>
    <Button type={type} onClick={onClick}>{name}</Button>
  </Flex>
);

export default Buttons;