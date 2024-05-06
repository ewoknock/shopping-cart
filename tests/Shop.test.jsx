import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from "../src/components/Shop";
import { BrowserRouter } from "react-router-dom";
import SetList from "../src/helpers/SetList";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom")
  return {...actual, useOutletContext: () => [[], vi.fn()]}
});

describe("Shop component", () => {
  it("renders all products", () => {
    render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    );
    const products = screen.getAllByTestId("set");
    expect(products).toHaveLength(SetList.length);
  });
});