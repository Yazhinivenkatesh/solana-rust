import axios from "axios";

const fetch = async ({
  method = "get",
  url = "",
  param,
  body,
  setNotificationParams,
  setVoteTopics,
  voteTopics
}) => {
  try {
    console.log(body)
    const response = await axios({
      baseURL: "http://localhost:5005/api/vote/",
      method,
      url,
      headers: { accessKey: "82C1692717792BA93C93A8829BBCB" },
      params: method === "get" ? param : {},
      data: method !== "get" ? body : {},
    });

    console.log(response)

    setNotificationParams({
      show: true,
      type: "success",
      title: "",
      description: "Data Successfully Fetched",
    });

    setVoteTopics([...response.data.data, ...voteTopics]);

    return response.data;
  } catch (err) {
    setNotificationParams({
      show: true,
      type: "error",
      title: "",
      description: "Error while retriving data",
    });

    return err.response;
  }
};

export default fetch;
