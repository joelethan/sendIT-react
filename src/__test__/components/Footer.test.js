import React from "react";
import { shallow } from "enzyme";
import Footer from "../../components/Footer";
import Parcels from "../../components/Parcels";
import Login from "../../components/Login";
import CreateParcels from "../../components/CreateParcels";
import Landing from "../../components/Landing";
import Register from "../../components/Register";
import Navigation from "../../components/Navigation";



it("renders without crashing", () => {
  const wrapper = shallow(<CreateParcels />);
  
  expect(wrapper).toMatchSnapshot();
});

it("renders without crashing", () => {
  const wrapper = shallow(<Footer />);
  
  expect(wrapper).toMatchSnapshot();
});



it("renders without crashing", () => {
  const wrapper = shallow(<Landing />);
  
  expect(wrapper).toMatchSnapshot();
});

it("renders without crashing", () => {
  const wrapper = shallow(<Login />);
  
  expect(wrapper).toMatchSnapshot();
});

it("renders without crashing", () => {
  const wrapper = shallow(<Parcels />);
  
  expect(wrapper).toMatchSnapshot();
});

it("renders without crashing", () => {
  const wrapper = shallow(<Login />);
  
  expect(wrapper).toMatchSnapshot();
});

it("renders without crashing", () => {
  const wrapper = shallow(<Register />);
  
  expect(wrapper).toMatchSnapshot();
});

it("renders without crashing", () => {
  const wrapper = shallow(<Navigation />);
  
  expect(wrapper).toMatchSnapshot();
});
