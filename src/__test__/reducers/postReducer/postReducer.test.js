import {PARCELS_LOAD_FAILED,PARCELS_LOADING,PARCELS_LOADED} from "../../../actions/types";
import postReducer from "../../../reducers/postReducer";

const initialState = {
    parcels: [],
    loading: false
};

describe("", () => {
    it("", () => {
        expect(postReducer(initialState, {type: PARCELS_LOAD_FAILED})).toEqual({"loading": false, "parcels": []})
    })

    it("", () => {
        expect(postReducer(initialState, {type: PARCELS_LOADED, payload: {parcels: {}} })).toEqual({"loading": false, "parcels": {"parcels": {}}})
    })

    it("", () => {
        expect(postReducer(initialState, {type: PARCELS_LOADING, payload: {}})).toEqual({"loading": true, "parcels": []})
    })

    it("", () => {
        expect(postReducer(initialState, {})).toEqual({"loading": false, "parcels": []})
    })
})
