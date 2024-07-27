import axios from 'axios';

const baseURL = 'https://portfolio-js.b.goit.study/api';

export default async function post({ input, message }) {
  try {
    const resp = await axios.post(`${baseURL}/requests`, {
      email: input,
      comment: message,
    });
    return resp.data;
  } catch (error) {
    // console.log(error.response.data.message);
    return error.response.data.message;
  }
}
