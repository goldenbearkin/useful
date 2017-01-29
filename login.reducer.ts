interface OnProcess {
  current: 'onProcess';
}

interface OnSuccess {
  current: 'onSuccess';
  payload: { username: string };
}

interface OnFailure {
  current: 'onFailure';
  error: Error;
}

export type LoginStateT = OnProcess | OnSuccess | OnFailure | null;


export function loginReducer(state: LoginStateT = null, action: Actions): LoginStateT {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return {
        current: 'onProcess'
      };

    case ActionTypes.LOGIN_SUCCESS:
      return {
        current: 'onSuccess',
        payload: { username: (<LoginSuccessAction>action).username }
      };

    case ActionTypes.LOGIN_FAILURE:
      return {
        current: 'onFailure',
        error: (<LoginFailureAction>action).error
      };

    case ActionTypes.LOGIN_RESET:
      return null;

    default:
      return state;
  }
}