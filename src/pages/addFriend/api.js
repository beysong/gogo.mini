
import { request } from '@/utils/http'
import apiHost from "@/utils/config"

export const getRule = async (data) => request(
    apiHost.API_HOST + '/wxa/AutoAddVip/GetWxWorkUserQrCode',
    data,
    {
        method: 'GET',
    }
)