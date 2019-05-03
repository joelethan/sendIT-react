import { SET_CURRENT_USER } from "../../../actions/types"
import authReducer from "../../../reducers/authReducer";

const initialState = {
    isAuthenticated: false,
    user: {}
}

describe("", () => {
    it("", () => {
        expect(authReducer(initialState, {
            type: SET_CURRENT_USER, 
            payload: { 
                identity: {
                    user: {
                        username: "joel"
                    }
                } 
            }
        })).toEqual({isAuthenticated: true, user: {username: "joel"}});
    });

    it("", () => {
        expect(authReducer(initialState, {})).toEqual({"isAuthenticated": false, "user": {}})
    })
});
