import axios from 'axios';

export default {
  getJobListApi(page) {
    return axios.get(`https://corsproxytest43.herokuapp.com/jobs.github.com/positions.json?page=${page || 0}`);
  },
};
