import { GET_ERRORS } from "../../../actions/types";
import errorsReducer from "../../../reducers/errorsReducer";

const initialState = {
    inAuthenticated: false,
    user: {}
}

describe("", () => {
    it("", () => {
        expect(errorsReducer(initialState, {type: GET_ERRORS, payload: 'this is an error message'})).toEqual("this is an error message")
    })

    it("", () => {
        expect(errorsReducer(initialState, {})).toEqual({"inAuthenticated": false, "user": {}});
    })
})
