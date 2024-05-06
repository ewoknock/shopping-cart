import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../src/components/Header";

describe("Header component", () => {
    it("renders the Header Logo", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        expect(screen.getByRole("link", {name: 'STAR WARS'}).textContent).toMatch(/STAR WARS/)
    })

    it("renders the Header navigation Links", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        expect(screen.getByRole("link", {name: 'Home'}).textContent).toMatch(/Home/)
        expect(screen.getByRole("link", {name: 'Shop'}).textContent).toMatch(/Shop/);
    })
})