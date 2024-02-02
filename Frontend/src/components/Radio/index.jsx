/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Radio, Space } from 'antd';

const Options = ({options, setVoteOption}) => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value)
    setVoteOption(e.target.value)
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction='vertical'>
        {options.map((option, index) => <Radio key={index} value={option.name}>{` ${option.name} - ${option.noOfVotes} votes`}</Radio>)}
      </Space>
    </Radio.Group>
  );
};
export default Options;