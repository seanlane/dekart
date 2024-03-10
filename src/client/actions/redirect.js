import { AuthState } from '../../proto/dekart_pb'

export function setRedirectState (redirectState) {
  return { type: setRedirectState.name, redirectState }
}

export function requestSensitiveScopes (returnPath) {
  return async (dispatch) => {
    const url = new URL(window.location.href)
    url.pathname = returnPath
    const state = new AuthState()
    state.setUiUrl(url.href)
    state.setAction(AuthState.Action.ACTION_REQUEST_CODE)
    state.setSensitiveScope(true)
    dispatch(authRedirect(state))
  }
}

const { REACT_APP_API_HOST } = process.env // this never changes, passed during build

// authRedirect will redirect the browser to the authentication endpoint
export function authRedirect (state) {
  return async (dispatch) => {
    dispatch({ type: authRedirect.name })
    const req = new URL('/api/v1/authenticate', REACT_APP_API_HOST || window.location.href)
    state.setAuthUrl(req.href)
    const stateBase64 = btoa(String.fromCharCode.apply(null, state.serializeBinary()))
    req.searchParams.set('state', stateBase64)
    window.location.href = req.href
  }
}
