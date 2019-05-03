import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { createBrowserHistory } from 'history';
import Register from "../../components/Register"

const middleware = [thunk];
const mockStore = configureStore(middleware);
const history = createBrowserHistory();

const state = {
    name: "",
    email: "",
    password: "",
    errors: {},
    auth: {
        isAuthenticated: true
    } 
};

const props = {
    history: history,
    registerUser: jest.fn(),
    auth: {
        isAuthenticated: false
    },
    errors: {},
}

const store = mockStore(() => state);

describe("", () => {
    const wrapper = mount(
        <Provider store={store}>
            <Router {...props}>
            <Register {...props} />
            </Router>
        </Provider>);
    it("", () => {
        wrapper.find("Register").find("form").simulate("submit")
    })

    it("", () => {
        const event = {
            target: {
                name: "username",
                value: "joel"
            }
        }
        wrapper.find("Register").find("form").find("input").first().simulate("change", event)
    })
})
