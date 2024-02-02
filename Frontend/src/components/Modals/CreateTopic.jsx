/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Modal, Input } from "antd";
import DropDown from "../Dropdown";
import runes from "runes";
import { inputTitle } from "../../utils/constants";
import fetch from "../../utils/apiRequests";

const CreateTopic = ({
  openModal,
  setOpenModal,
  setNotificationParams,
  setVoteTopics,
  voteTopics
}) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [dropDownValue, setDropDownValue] = useState(2);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [options, setOptions] = useState([]);

  const submitTopic = async () => {
    await fetch({
      method: "post",
      url: "add-topic",
      body: {title, description, options},
      setNotificationParams,
      setVoteTopics,
      voteTopics
    });
    setTimeout(() => {
      setNotificationParams({ show: false });
    }, [2000]);
    return null; 
  }

  useEffect(() => {
    setOptions(options.slice(0, dropDownValue))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dropDownValue])

  const handleOk = async () => {
    setConfirmLoading(true);
    await submitTopic()
    setTimeout(() => {
      setOpenModal(false);
      setConfirmLoading(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

  const CreateInputFields = () => {
    const inputArray = [];
    for (let i = 0; i < dropDownValue; i++) {
      inputArray.push(
        <>
          <p>{inputTitle[i + 1]}:</p>
          <Input
            style={{
              marginTop: "5px",
            }}
            id={i}
            key={i}
            count={{
              show: true,
              max: 15,
              strategy: (txt) => runes(txt).length,
              exceedFormatter: (txt, { max }) =>
                runes(txt).slice(0, max).join(""),
            }}
            value={options[i]}
            onChange={onchangeOptions}
          />
        </>
      );
    }
    return inputArray;
  };

  const onChangeTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const onChangeDescription = (e) => {
    const description = e.target.value;
    setDescription(description);
  };

  const onchangeOptions = (e) => {
    e.preventDefault();
    const fieldId = e.target.id;
    const value = e.target.value;
    options[fieldId] = value;
    setOptions(options);
  };

  return (
    <>
      <Modal
        title="Create Vote Topic"
        open={openModal}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Input
          style={{
            marginTop: "5px",
            marginBottom: "15px",
          }}
          key="Topic"
          count={{
            show: true,
            max: 50,
            strategy: (txt) => runes(txt).length,
            exceedFormatter: (txt, { max }) =>
              runes(txt).slice(0, max).join(""),
          }}
          onChange={onChangeTitle}
        />
        <h3>Description:</h3>
         <Input
          style={{
            marginBottom: "25px",
          }}
          key="Description"
          count={{
            show: true,
            max: 100,
            strategy: (txt) => runes(txt).length,
            exceedFormatter: (txt, { max }) =>
              runes(txt).slice(0, max).join(""),
          }}
          onChange={onChangeDescription}
        />

        <DropDown setDropDownValue={setDropDownValue} />
        {dropDownValue && (
          <>
            <h3>Options:</h3>
            <CreateInputFields />
          </>
        )}
      </Modal>
    </>
  );
};

export default CreateTopic;
