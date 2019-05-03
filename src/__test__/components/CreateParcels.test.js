import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { createBrowserHistory } from 'history';
import CreateParcels from "../../components/CreateParcels";

const middleware = [thunk];
const mockStore = configureStore(middleware);
const history = createBrowserHistory();

const state = {
    pickup_location: "",
    weight: "",
    destination: "",
    present_location: ""
}

const props = {
    history: history,
    errors: {},
    parcels: {
        parcels: []
    },
    loading: true
}

const store = mockStore(() => state);

describe("", () =>{
    const wrapper = mount(
        <Provider store={store}>
            <Router {...props}>
            <CreateParcels {...props} />
            </Router>
        </Provider>
    );

    it("", () => {
        const event = {
            preventDefault: jest.fn()
        }
        wrapper.find("CreateParcels").find("form").simulate("submit", event)
    })

    it("", () => {
        const event = {
            target: {
                name: "product",
                value: "iphone"
            }
        }
        wrapper.find("CreateParcels").find("form").find("input").first().simulate("change", event)
    })
})
