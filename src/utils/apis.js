import axios from "axios";

const camelize = (input) =>
  input.replace(/( |_|-)([a-z])/gm, (a, b, c) => c.toUpperCase());

axios.interceptors.response.use(function(response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  const { data: res } = response;
  const data = res.map((item) =>
    Object.entries(item).reduce(
      (prev, [key, val]) => ({ ...prev, [camelize(key)]: val }),
      {},
    ),
  );
  return { ...response, data };
});

// Below end point is declared here should be placed in .env
const {
  API_END_POINT = `https://lb7u7svcm5.execute-api.ap-southeast-1.amazonaws.com/dev`,
} = process.env;

axios.defaults.baseURL = API_END_POINT;

export const getIngredients = () => {
  return axios
    .get("/ingredients")
    .then(
      ({ data }) => data,
      // [...data].sort(
      //   ({ [`useBy`]: aUseBy }, { [`useBy`]: bUseBy }) => aUseBy - bUseBy,
      // ),
    )
    .catch((err) => err);
};
