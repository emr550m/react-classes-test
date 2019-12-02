import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { Input } from "../../src/components/input";
import { render, fireEvent } from "@testing-library/react";

test("Input Element", () => {
  var valueItem = "12345";

  function setItemValue(e) {
    valueItem = e.target.value;
  }

  const { container, getByText, getByPlaceholderText } = render(
    <Input
      title="App Title"
      change={setItemValue}
      value={valueItem}
      placeholder="Enter New Title"
      subtitle="Please set new title."
    />
  );
  // console.log(container.querySelector() )
  expect(getByText("App Title")).toBeTruthy();
  expect(getByPlaceholderText("Enter New Title")).toBeTruthy();
  expect(getByText("Please set new title.")).toBeTruthy();
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="form-group"
      >
        <label
          class="form-label"
          for="formBasicEmail"
        >
          App Title
        </label>
        <input
          class="form-control"
          id="formBasicEmail"
          placeholder="Enter New Title"
          type="text"
          value="12345"
        />
        <small
          class="text-muted form-text"
        >
          Please set new title.
        </small>
      </div>
    </div>
  `);
});
