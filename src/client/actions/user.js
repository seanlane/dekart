import { GetUserStreamRequest } from '../../proto/dekart_pb'
import { Dekart } from '../../proto/dekart_pb_service'
import { getConnectionsList } from './connection'
import { grpcStream, grpcStreamCancel } from './grpc'
import { getInvites, getSubscription, listUsers } from './organization'

export function userStreamUpdate (userStream) {
  return {
    type: userStreamUpdate.name,
    userStream
  }
}

export function subscribeUserStream () {
  return (dispatch) => {
    dispatch({ type: subscribeUserStream.name })
    const request = new GetUserStreamRequest()
    const prevRes = {
      connectionUpdate: 0,
      subscriptionUpdate: -1,
      organizationUpdate: -1,
      organizationInviteUpdate: 0
    }
    dispatch(grpcStream(Dekart.GetUserStream, request, (message, err) => {
      if (message) {
        dispatch(userStreamUpdate(message))
        if (message.subscriptionActive) {
          // update only when subscription is active to avoid 404 errors
          if (prevRes.connectionUpdate !== message.connectionUpdate) {
            prevRes.connectionUpdate = message.connectionUpdate
            dispatch(getConnectionsList())
          }
          if (prevRes.organizationUpdate !== message.organizationUpdate) {
            prevRes.organizationUpdate = message.organizationUpdate
            dispatch(listUsers())
          }
        }
        if (prevRes.subscriptionUpdate !== message.subscriptionUpdate) {
          prevRes.subscriptionUpdate = message.subscriptionUpdate
          dispatch(getSubscription())
        }
        if (prevRes.organizationInviteUpdate !== message.organizationInviteUpdate) {
          prevRes.organizationInviteUpdate = message.organizationInviteUpdate
          dispatch(getInvites())
        }
      }
      return err
    }))
  }
}

export function unsubscribeUserStream () {
  return (dispatch, getState) => {
    dispatch(grpcStreamCancel(Dekart.GetUserStream))
    dispatch({ type: unsubscribeUserStream.name })
  }
}
