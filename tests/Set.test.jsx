import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { userEvent } from "@testing-library/user-event";
import Set from "../src/components/Set"
import SetList from "../src/helpers/SetList";

const mockProduct = SetList[0];

describe("Set component", () => {
  it("renders the set image", () => {
    const mockUpdateCart = vi.fn();
    render(
      <BrowserRouter>
        <Set set={mockProduct} />
      </BrowserRouter>
    );
    expect(
      screen.getByRole("img", { name: mockProduct.name })
    ).toBeInTheDocument();
  });

  it("renders the product name", () => {
    const mockUpdateCart = vi.fn();
    render(
      <BrowserRouter>
        <Set set={mockProduct} />
      </BrowserRouter>
    );
    expect(screen.getByRole("paragraph", {name: 'set-name'}).textContent).toMatch(mockProduct.name);
  });

  it("renders the product price", () => {
    const mockUpdateCart = vi.fn();
    render(
      <BrowserRouter>
        <Set set={mockProduct} />
      </BrowserRouter>
    );
    const matcher = `${mockProduct.price}`
    expect(screen.getByRole("paragraph", {name: 'price'}).textContent).toMatch(matcher);
  });

  it("renders initial quantity of 1", () => {
    const mockUpdateCart = vi.fn();
    render(
      <BrowserRouter>
        <Set set={mockProduct} />
      </BrowserRouter>
    );
    expect(screen.getByTestId("qty-input")).toHaveTextContent("1");
  });

  it("renders the add to cart button", () => {
    const mockUpdateCart = vi.fn();
    render(
      <BrowserRouter>
        <Set set={mockProduct} />
      </BrowserRouter>
    );
    expect(
      screen.getByRole("button", { name: "Add to Cart" })
    ).toBeInTheDocument();
  });

  it("updates the quantity when quantity buttons are clicked", async () => {
    const mockUpdateCart = vi.fn();
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Set set={mockProduct} />
      </BrowserRouter>
    );
    const increaseQtyButton = screen.getByText("+");

    await user.click(increaseQtyButton);

    expect(screen.getByTestId("qty-input")).toHaveTextContent("2");
  });

  it("does not let the quantity go below 1", async () => {
    const mockUpdateCart = vi.fn();
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Set set={mockProduct} />
      </BrowserRouter>
    );
    const decreaseQtyButton = screen.getByText("-");

    await user.click(decreaseQtyButton);

    expect(screen.getByTestId("qty-input")).toHaveTextContent("1");
  });
/*
  it("adds items to cart when add to cart button is clicked", async () => {
    const mockUpdateCart = vi.fn();
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Set item={mockProduct} updateCart={mockUpdateCart} cart={[]} />
      </BrowserRouter>
    );
    const addToCartButton = screen.getByRole("button", { name: "Add to Cart" });

    await user.click(addToCartButton);

    expect(mockUpdateCart).toHaveBeenCalledOnce();
  });*/
});