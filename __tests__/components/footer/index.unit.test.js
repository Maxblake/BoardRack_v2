import React from "react";
import Footer from "@components/footer/index.js";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import { initializeStore } from "@store";
import { Provider } from "react-redux";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const initialState = {};
const store = initializeStore(initialState);
const wrapper = mount(
  <Provider store={store}>
    <Footer />
  </Provider>
);

it("matches snapshot", () => {
  const tree = renderer.create(wrapper).toJSON();
  expect(tree).toMatchSnapshot();
});
