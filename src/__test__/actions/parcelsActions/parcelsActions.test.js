import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import {
    getParcels, addParcel,
} from "../../../actions/parcelsActions";

import {
    PARCELS_LOADED,
} from "../../../actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("parcels actions tests", () => {
  const props = {
    history: {
      push: jest.fn(),

    },
  };
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("Should add a Parcel", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        response: {},
      });
    });
    const expectedActions = [{ payload: {}, type: "ADD_POST" }];

    const parcelData = {
        pickup_location: "joel@gmail.com",
        destination: "passwordd",
        present_location: "testusername",
        weight: 1
    };
    return store.dispatch(addParcel(parcelData, props)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("Should fetch parcels", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          parcels: [],
        },
      });
    });
    const expectedActions = [{"type": "PARCELS_LOADING"}, { payload: undefined, type: PARCELS_LOADED }];
    return store.dispatch(getParcels()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

});
