import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BtnFilter from "./components/BtnFilter";

test("renders click", () => {
  const mockHandler = jest.fn;
  const btn = {
    content: "ESTUDIANTES",
  };
  const component = render(<BtnFilter btn={btn} handleView={mockHandler} />);
  const btnfilter = component.getByText("ESTUDIANTES");
  fireEvent.click(btnfilter);
});
