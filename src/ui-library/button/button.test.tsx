import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import Button from "./button";

afterEach(cleanup);

describe("Icon Only Button", (): void => {
  it("It should have an aria-label attribute ", () => {
    render(
      <Button
        onClick={() => console.log("clicked")}
        ariaLabel={"Go to Cart"}
        variant={"icon"}
      >
        <FontAwesomeIcon icon={faShoppingCart} />
      </Button>
    );
    expect(screen.getByRole("button", { name: "Go to Cart" })).toHaveAttribute(
      "aria-label"
    );
  });

  it("It should render without crashing", () => {
    render(
      <Button
        onClick={() => console.log("clicked")}
        ariaLabel={"Go to Cart"}
        variant={"icon"}
      >
        <FontAwesomeIcon icon={faShoppingCart} />
      </Button>
    );
    expect(
      screen.getByRole("button", { name: "Go to Cart" })
    ).toMatchSnapshot();
  });
});

describe("primary or secondary button", (): void => {
  it("should render a large primary button if no variant or size is defined", () => {
    render(
      <Button onClick={() => console.log("clicked")}>Primary Button</Button>
    );
    expect(screen.getByRole("button", { name: "Primary Button" })).toHaveClass(
      "primary-large"
    );
  });

  it("should be disabled", async () => {
    render(
      <Button
        onClick={() => console.log("clicked")}
        disabled
        variant={"secondary"}
      >
        Secondary Button
      </Button>
    );
    expect(
      await screen.findByRole("button", { name: "Secondary Button" })
    ).toBeDisabled();
  });
});
