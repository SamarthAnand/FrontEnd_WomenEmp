import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store";
import AddFeedback from "../AddFeedback"

describe("Add Feedback Page Tests", () => {
    it("Add Feedback page", () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <BrowserRouter>
            <AddFeedback />
          </BrowserRouter>
        </Provider>
      );
      const details = getByTestId("addfeedback");
      expect(details).toBeTruthy();
    });
  });