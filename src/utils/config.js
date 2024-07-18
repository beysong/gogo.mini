
const typeObj = {
    DEV: {
        API_HOST: 'https://jd-m-dev.ezrpro.com/api',
    },
    Q1: {
        API_HOST: 'https://jd-m-dev.ezrpro.com/api',
    },
    TP: {
        API_HOST: 'https://jd-m-tp.ezrpro.com/api',
    },
}
const host = typeObj[process.env.TARO_APP_BUILD_TYPE || 'TP']

export default host
