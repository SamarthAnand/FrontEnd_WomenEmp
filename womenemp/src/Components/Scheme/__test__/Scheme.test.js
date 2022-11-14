import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store";
import Scheme from "../Scheme"
import axios from 'axios'
import { addSchemes } from "../../../Actions/SchemeActions";

jest.mock("axios");

const dummyValues = [
  {
    schemeName: "happy",
    schemeType: "go",
    schemeEligibility: "yes",
    launchDate: "2022-11-01",
    schemeObjective: "none"
  }
]
describe("Customer Profile Page Tests", () => {
  it("Rendered customer profile page", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Scheme />
        </BrowserRouter>
      </Provider>
    );
    const details = getByTestId("schemeTest");
    expect(details).toBeTruthy();
  });
  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Some error occurs';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
  });
});


