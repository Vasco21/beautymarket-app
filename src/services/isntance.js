import React from 'react';
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://uzuriapi.el.r.appspot.com/looks'

  });


  instance.registerInterceptWithStore = (store) => {
    instance.interceptors.response.use(
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


export default instance;