
console.log('process.env.TARO_APP_BUILD_TYPE', process.env.TARO_APP_BUILD_TYPE)
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
const host = typeObj[process.env.TARO_APP_BUILD_TYPE]

export default host
