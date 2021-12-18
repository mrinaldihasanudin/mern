import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Button from "./index";

test("Seharusnya tidak bisa di klik jika isDisable di keluarkan", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Seharusnya merender kata loading/spinner jika isLoading di keluarkan", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
});

test("Seharusnya render tag <a>", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("Seharusnya render link <Link> component", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link" isExternal></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});
