import api from '../_api';

function getJobList(context, page) {
  return api.getJobListApi(page).then((response) => {
    context.commit('JOBS_RECEIVED', response.data);
    return response.data;
  }).catch((err) => err);
}

export default {
  getJobList,
};
