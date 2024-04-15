import axios from "axios";

axios.defaults.baseURL = "http://hn.algolia.com/api/v1";

export const fetchArticles = async (searchQuery, page = 1) => {
  const response = await axios.get("/search", {
    params: {
      query: searchQuery,
      hitsPerPage: 10,
      page,
    },
  });

  return response.data.hits;
};
