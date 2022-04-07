import axios from 'axios';

const apiPro = axios.create({
  baseURL: 'https://uzuriapi.el.r.appspot.com/'
});

apiPro.registerInterceptWithStore = (store) => {
    apiPro.interceptors.response.use(
    (response) => {
      const { data } = response;
      if (data && !data.success && (data.httpStatusCode === 403 || data.httpStatusCode === 401))
        alert('SignOut');
      return response;
    },
    (err) => {
      if (err.response.status === 403 || err.response.status === 401) alert('SignOut');
      return err;
    }
  );
};

export default apiPro;