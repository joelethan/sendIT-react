import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { createBrowserHistory } from 'history';
import Navigation from "../../components/Navigation"

const middleware = [thunk];
const mockStore = configureStore(middleware);
const history = createBrowserHistory();

const state = {
    auth: {
        isAuthenticated: true
    }
}

const props = {
    history: history,
}
const store = mockStore(() => state);

describe("", () =>{
    const wrapper = mount(
        <Provider store={store}>
            <Router {...props}>
            <Navigation {...props} />
            </Router>
        </Provider>);
    it("", () => {
        wrapper.find("Navigation").find("#logout-link").simulate("click")
    })
})
