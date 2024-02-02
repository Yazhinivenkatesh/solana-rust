/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { notification } from "antd";

const Notification = ({ type, title, description }) => {
  const [api, contextHolder] = notification.useNotification();

  const notificationParams = {
    message: title,
    description,
  };

  switch(type) {
    case 'success':
        api.success(notificationParams);
        break;
    case 'error':
        api.error(notificationParams);
        break
  }

  return (
    <>
      {contextHolder}
    </>
  );
};

export default Notification;
