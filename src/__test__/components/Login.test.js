import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { mount, shallow } from 'enzyme';
import { createBrowserHistory } from 'history';
import Login from "../../components/Login"

const middleware = [thunk];
const mockStore = configureStore(middleware);
const history = createBrowserHistory();

const state = {
    auth: {
        isAuthenticated: true
    },
    errors: {}
}

const props = {
    history: history,
    errors: {}
}

const store = mockStore(() => state);

describe("", () => {
    const wrapper = mount(
        <Provider store={store}>
            <Router {...props}>
            <Login {...props} />
            </Router>
        </Provider>
    );
    
    it("", () => {
        wrapper.find("Login").find("form").simulate("submit")
    })

    it("", () => {
        const event = {
            target: {
                name: "username",
                value: "joel"
            }
        }
        wrapper.find("Login").find("form").find("input").first().simulate("change", event)
    })

    it("", ()=>{
        const wrap = shallow(
            <Provider store={store}>
                <Router {...props}>
                <Login {...props} />
                </Router>
            </Provider>
        );
    })
})
