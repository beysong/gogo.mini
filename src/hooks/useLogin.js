
import { useAuthDispatch } from "@/utils/authContext"
import { login } from "@/services"

export const useLogin = () => {

    const dispatch = useAuthDispatch()

    const wxLogin = () => {
        dispatch({ type: 'LOGIN__REQUEST' })
        login().then(res => {
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.Result })
        }).catch(() => {
            dispatch({ type: 'LOGIN__FAIL' })
        })
    }
    return wxLogin
}