
const host = process.env.TARO_APP_CLOUD_TYPE === 'Q1' ?
    { API_HOST: 'https://jd-m-dev.ezrpro.com/api' } :
    { API_HOST: 'https://jd-m-tp.ezrpro.com/api' };

export default host;
