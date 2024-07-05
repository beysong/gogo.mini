
import { createContext, useContext, useReducer, useEffect } from 'react';
import { login } from '@/services';

const AuthContext = createContext(null);

const AuthDispatchContext = createContext(null);

export function AuthProvider({ children }) {
  const [authState, dispatch] = useReducer(
    userReducer,
    initAuthState
  );

  // 登录
  useEffect(() => {
    dispatch({ type: 'LOGIN__REQUEST' })
    login().then(res => {
      dispatch({ type: 'LOGIN_SUCCESS', payload: res?.Result })
    }).catch(() => {
      dispatch({ type: 'LOGIN__FAIL' })
    })
  }, []);

  return (
    <AuthContext.Provider value={authState}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export function useAuthDispatch() {
  return useContext(AuthDispatchContext);
}

function userReducer(authState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      return {
        ...authState,
        userInfo: action.payload,
        loading: false
      };
    }
    case 'LOGIN__REQUEST': {
      return {
        ...authState,
        userInfo: action.payload,
        loading: true
      };
    }
    case 'LOGIN__FAIL': {
      return {
        ...authState,
        userInfo: null,
        loading: false
      };
    }
    case 'LOGOUT': {
      return {
        ...authState,
        userInfo: null,
        loading: false
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initAuthState = {
  userInfo: null,
  loading: true
}