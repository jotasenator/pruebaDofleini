import { types } from "../types/types";


export const appReducer = (state, action) => {



    const { payload, type } = action

    switch (type) {
        case types.color:
            return {
                ...state,
                color: payload,
            }
        case types.inputComponent:
            return {
                ...state,
                inputComponent: payload,
            }
        case types.inputSuffixComponent:
            return {
                ...state,
                inputSuffixComponent: payload,
            }
        case types.personas:
            return {
                ...state,
                personas: payload,
            }
        case types.privacidad:
            return {
                ...state,
                privacidad: payload,
            }

        default:
            return state
    }
}