import { render } from "@testing-library/react";
import * as React from "react";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  it("render app", async () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
