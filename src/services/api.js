import React from 'react';
import axios from "axios";

const api = axios.create({
    baseURL: 'https://vasco21.github.io/PrettyApi/'

  });


  api.registerInterceptWithStore = (store) => {
    api.interceptors.response.use(
        (response) => {
            const { data } = response;
            if (data && !data.success && (data.httpStatusCode === 403 || data.httpStatusCode === 401))
            alert('signOut');
            return response;
        },
        (err) => {
            if(err.response.status === 403 || err.response.status === 401) alert('signOut');
            return err
        }
    );
};


export default api;
