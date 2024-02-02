/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Card, List } from "antd";
import Buttons from "../Button";

const TopicList = ({ setIsDrawerOpen, data, setSelectedTopic }) => {
  const onSelectTopic = (index) => {
    setSelectedTopic(data[index]);
    setIsDrawerOpen(true);
  };

  return (
    <List
      pagination={{ align: "end", position: "bottom", marginTop: "25px" }}
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3,
      }}
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <Card title={item.title}>
            <div>
              <p>{item.description}</p>
              <Buttons
                style={{ flexDirection: "row-reverse" }}
                type={"link"}
                name={"vote"}
                onClick={() => onSelectTopic(index)}
              />
            </div>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default TopicList;
