import axios from "axios";

// Below end point is declared here should be placed in .env
const {
  API_END_POINT = `https://lb7u7svcm5.execute-api.ap-southeast-1.amazonaws.com/dev`,
} = process.env;

axios.defaults.baseURL = API_END_POINT;

export const getIngredients = () => {
  return axios
    .get("/ingredients")
    .then(({ data }) => data)
    .catch((err) => err);
};
