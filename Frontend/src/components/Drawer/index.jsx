/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Col, Divider, Drawer, Row } from "antd";
import Options from "../Radio";
import Buttons from "../Button";
import fetch from "../../utils/apiRequests";

const VoteDrawer = ({
  isDrawerOpen,
  setIsDrawerOpen,
  selectedTopic,
  setNotificationParams,
  setVoteTopics,
  voteTopics,
}) => {
  const [selectedOption, setSelectedOption] = useState();

  const onClose = () => {
    setIsDrawerOpen(false);
  };

  const onCastVote = async () => {
    await fetch({
      method: "post",
      url: "cast-vote",
      body: {
        title: selectedTopic.title,
        id: selectedTopic.id,
        option: selectedOption,
      },
      setNotificationParams,
      setVoteTopics,
      voteTopics,
    });
    setTimeout(() => {
      setNotificationParams({ show: false });
    }, [2000]);
    return null;
  };

  return (
    <>
      <Drawer
        width={640}
        placement="right"
        closable={true}
        onClose={onClose}
        open={isDrawerOpen}
      >
        <h2>{selectedTopic.title}</h2>
        <Row>
          <Col span={24}>
            <div
              style={{ marginBottom: "25px" }}
              className="site-description-item-profile-wrapper"
            >
              {selectedTopic.description}
            </div>
          </Col>
        </Row>
        <Row>
          <Options
            setVoteOption={setSelectedOption}
            options={selectedTopic.options}
          />
        </Row>
        <Divider />
        <Buttons
          style={{ flexDirection: "row-reverse" }}
          name="Cast vote"
          type="primary"
          onClick={onCastVote}
        />
      </Drawer>
    </>
  );
};
export default VoteDrawer;
