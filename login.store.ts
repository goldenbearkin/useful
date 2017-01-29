export const getLoginOnProcess = createSelector(getAuthLoginState, (state: LoginStateT) => state.current === 'onProcess' ? state : null);
export const getLoginOnSuccess = createSelector(getAuthLoginState, (state: LoginStateT) => state.current === 'onSuccess' ? state : null);
export const getLoginOnFailure = createSelector(getAuthLoginState, (state: LoginStateT) => state.current === 'onFailure' ? state : null);
