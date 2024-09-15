import { fireEvent, render } from "@testing-library/react";
import * as React from "react";
import Login from "./Login";
import { store } from "../store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { handleInitialData } from "../actions/shared";

describe("Login", () => {
  it("render login", async () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    expect(component).toBeDefined();
  });

  it("will display message error when entering incorrect username", async () => {
    await store.dispatch(handleInitialData());

    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const username = component.getByTestId("username");
    fireEvent.change(username, { target: { value: "sarahedo1" } });
    const password = component.getByTestId("password");
    fireEvent.change(password, { target: { value: "1234" } });
    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(component.queryByTestId("error")).not.toBeInTheDocument();

    const submitButton = component.getByTestId("submit");
    expect(submitButton).toBeInTheDocument();
    fireEvent.click(submitButton);
    expect(component.getByTestId("error")).toBeInTheDocument();
  });

  it("will not display message error when entering incorrect username", async () => {
    await store.dispatch(handleInitialData());

    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const username = component.getByTestId("username");
    fireEvent.change(username, { target: { value: "tylermcginnis" } });
    const password = component.getByTestId("password");
    fireEvent.change(password, { target: { value: "1234" } });
    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(component.queryByTestId("error")).not.toBeInTheDocument();

    const submitButton = component.getByTestId("submit");
    expect(submitButton).toBeInTheDocument();
    fireEvent.click(submitButton);
    expect(component.queryByTestId("error")).not.toBeInTheDocument();
  });
});
