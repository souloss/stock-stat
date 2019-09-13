import axios from 'axios';

var apicode = 'd7ecb749062b47fb92eecb2a22e829ef'
// hearder = {'Authorization','APPCODE '+apicode}

now = new Date();
begin = now.getFullYear()-1 + "-" +((now.getMonth()+1)<10?"0":"")+(now.getMonth()+1)+"-"+(now.getDate()<10?"0":"")+now.getDate();
end = now.getFullYear() + "-" +((now.getMonth()+1)<10?"0":"")+(now.getMonth()+1)+"-"+(now.getDate()<10?"0":"")+now.getDate();

axios.interceptors.request.use(
    config => {
        config.headers.Authorization = 'APPCODE '+apicode
        return config;
    },
    err => {
        return Promise.reject(err);
});

