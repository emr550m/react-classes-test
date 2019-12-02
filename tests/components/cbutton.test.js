import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { CButton } from "../../src/components/cbutton";
import { render, fireEvent } from "@testing-library/react";

test("Input Element", () => {
  var clicked = false;
  function onButtonClick(e) {
      console.log("here")
    clicked = true; 
  }
  onButtonClick=onButtonClick.bind(this);

  const { container, getByText, getByPlaceholderText } = render(
    <CButton click={onButtonClick}>Set Title</CButton>
  );

  fireEvent.click(getByText("Set Title"))
  expect(clicked).toBe(true);

  expect(getByText("Set Title")).toBeTruthy();
  expect(container).toMatchInlineSnapshot(`
    <div>
      <button
        class="btn btn-primary"
        type="button"
      >
        Set Title
      </button>
    </div>
  `);
});
