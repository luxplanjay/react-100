import axios from "axios";

axios.defaults.baseURL = "http://hn.algolia.com/api/v1";

export const fetchArticles = async (searchQuery, currentPage) => {
  // const response = await axios.get(`/search?query=${searchQuery}`);

  const response = await axios.get("/search", {
    params: {
      query: searchQuery,
      hitsPerPage: 10,
      page: currentPage,
    },
  });
  return response.data.hits;
};
