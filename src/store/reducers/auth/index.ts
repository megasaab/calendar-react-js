import {AuthAction, AuthActionsEnum, AuthState} from "./type";

const initialState: AuthState = {
    isAuth: false
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionsEnum.SET_AUTH:
            return {...state, isAuth: action.payload}
        default:
            return state;
    }
}