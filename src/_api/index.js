import axios from 'axios';

export default {
  getJobListApi(page) {
    return axios.get(`https://jobs.github.com/positions.json?page=${page || 0}`);
  },
};
