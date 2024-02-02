/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { dropDownItems } from "../../utils/constants";

const DropDown = ({ setDropDownValue }) => {
  const onSelectOption = ({ key }) => {
    setDropDownValue(key);
  };

  return (
    <Dropdown
      menu={{
        items: dropDownItems,
        onClick: onSelectOption,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Select no of options for the topic.
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropDown;
