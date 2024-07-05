
import Taro, { getStorageSync } from "@tarojs/taro"

const storageKey = 'G_REQ_HEAD_P'; // global request header param

export const request = async (url, data, option = {}) => {

    const storageHeaderParam = getStorageSync({ key: storageKey }) || '';
    const header = {
        'content-type': 'application/json', // 默认值
        ...(option.header || {})
    }
    if (storageHeaderParam) {
        header['ezr-env-tag'] = storageHeaderParam;
    }

    const { data: resData, statusCode, errMsg } = await Taro.request({
        url,
        data,
        ...option,
        header,
    });
    console.log('resData', resData);
    if (statusCode !== 200) {
        Taro.showToast({
            title: errMsg || '网络异常',
            icon: 'none',
            duration: 2000
        })
    }
    return resData;
}