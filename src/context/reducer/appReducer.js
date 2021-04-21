import { types } from "../types/types"

export const appReducer = (state, action) => {


    const { payload, type, name } = action

    // console.log(payload)

    switch (type) {

        case types.globalTest:
            return {
                ...state,
                [name]: payload,
            }

        default:
            return state
    }
}