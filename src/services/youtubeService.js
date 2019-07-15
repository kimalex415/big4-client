import axios from "axios";

const url = "https://www.googleapis.com/youtube/v3/";

const getYoutubeVideos = search => {
  const config = {
    method: "GET",
    url: `${url}search?part=snippet&maxResults=2&order=rating&q=${search}&key=${
      process.env.REACT_APP_YOUTUBE_API_KEY
    }`,
    crossDomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(onGlobalSuccess)
    .catch(onGlobalError);
};

const onGlobalSuccess = response => {
  /// Should not use if you need access to anything other than the data
  return response.data;
};

const onGlobalError = err => {
  return Promise.reject(err);
};

export { getYoutubeVideos };
