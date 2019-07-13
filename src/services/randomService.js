import axios from "axios";

const quoteUrl =
  "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=20";
const instaUrl = "https://api.instagram.com/v1/users";

const randomQuote = () => {
  const config = {
    method: "GET",
    url: quoteUrl,
    crossDomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(onGlobalSuccess)
    .catch(onGlobalError);
};

const fetchInstagramUser = () => {
  const config = {
    method: "GET",
    url: `${instaUrl}/self/?access_token=1788471779.de740ef.44a8b94ed91b4ad1b471af8060f2dd56`,
    crossDomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(onGlobalSuccess)
    .catch(onGlobalError);
};

const fetchInstagramPosts = () => {
  const config = {
    method: "GET",
    url: `${instaUrl}/self/media/recent/?access_token=1788471779.de740ef.44a8b94ed91b4ad1b471af8060f2dd56`,
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

export { randomQuote, fetchInstagramUser, fetchInstagramPosts };
