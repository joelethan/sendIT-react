import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { createBrowserHistory } from 'history';
import Home from "../../components/Home"


const middleware = [thunk];
const mockStore = configureStore(middleware);
const history = createBrowserHistory();

const state = {
    auth: {
        isAuthenticated: true
    },
    errors: {},
    parcels: {
        parcels: []
    },
    loading: true
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
            <Home {...props} />
            </Router>
        </Provider>
    );

    it("", () => {
        wrapper.setProps({loading: true})
    })
})
