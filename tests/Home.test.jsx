import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../src/components/Home";

describe("Home component", () => {
    it("renders the home header", () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        expect(screen.getByRole("heading").textContent).toMatch(/Lego Star Wars Ultimate Collection/i)
    })

    it("renders the home image", () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        expect(screen.getByRole("img")).toBeInTheDocument()
    })

    it("renders the home shop button", () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        expect(screen.getByRole("button").textContent).toMatch(/Sets/i)
    })
})