
import Taro from "@tarojs/taro"
import { request } from '@/utils/http'
import apiHost from "@/utils/config"

export const login = async () => {

    const { code } = await Taro.login();
    const { data, statusCode, errMsg } = await Taro.request({
        url: apiHost.API_HOST_CENTRE + 'Base/User/WxAppOnLoginNew',
        method: 'POST',
        data: {
            code,
            CommonId: "",
            CommonIdSource: 47,
            CommonIdType: "VipWxUnionId"
        }
    });
    if (statusCode === 200) {
        return data;
    }
    Taro.showToast({ title: errMsg, icon: 'none', duration: 2000 });
    return null;
}

export const commonApi = async (url, data) => request(
    apiHost.API_HOST_CENTRE + url,
    data,
    {
        method: 'POST',
    }
)