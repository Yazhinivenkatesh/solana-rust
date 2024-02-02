// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Layout, theme } from "antd";
import TopicList from "./components/List";
import VoteDrawer from "./components/Drawer";
import fetch from "./utils/apiRequests";
import Buttons from "./components/Button";
import Notification from "./components/Modals/Notification";
import CreateTopic from "./components/Modals/CreateTopic";
const { Header, Content, Footer } = Layout;

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [voteTopics, setVoteTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState({});
  const [notificationParams, setNotificationParams] = useState({ show: false });
  const [openModal, setOpenModal] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const getTopics = async () => {
    await fetch({
      method: "get",
      url: "fetch-votes",
      setNotificationParams,
      setVoteTopics, 
      voteTopics
    });
    setTimeout(() => {
      setNotificationParams({ show: false });
    }, [2000]);
    return null;
  };

  useEffect(() => {
    getTopics();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
        }}
      >
        <div className="demo-logo text-white">
          <h2>Voting Application</h2>
        </div>
        {notificationParams.show && <Notification {...notificationParams} />}
      </Header>
      <Content
        // style={{
        //   padding: "0 48px",
        // }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <div>
            <Buttons
              type="primary"
              name="Create Topic"
              style={{
                marginTop: "5px",
                marginBottom: "15px",
                flexDirection: "row-reverse",
              }}
              onClick={() => setOpenModal(true)}
            />
          </div>
          <TopicList
            setIsDrawerOpen={setIsDrawerOpen}
            data={voteTopics}
            setSelectedTopic={setSelectedTopic}
          />
          {selectedTopic && (
            <VoteDrawer
              isDrawerOpen={isDrawerOpen}
              setIsDrawerOpen={setIsDrawerOpen}
              selectedTopic={selectedTopic}
              setNotificationParams={setNotificationParams}
            />
          )}
          {openModal && (
            <CreateTopic
              openModal={openModal}
              setOpenModal={setOpenModal}
              voteTopics={voteTopics}
              setNotificationParams={setNotificationParams}
              setVoteTopics={setVoteTopics}
            />
          )}
        </div>
      </Content>
      <Footer
        style={{
          position: "fixed",
          bottom: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 -2px 5px rgba(0, 0, 0, 0.1)` /* Optional: Add shadow for depth */

        }}
      >
        Voting Application ©{new Date().getFullYear()} Created by Yazhini
        Venkatesh
      </Footer>
    </Layout>
  );
};

export default App;
