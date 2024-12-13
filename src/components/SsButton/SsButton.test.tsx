import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import SsButton from "./SsButton";

describe("PrimaryButton", () => {
    test("renders the Rating component", () => {
        render(<SsButton role={'btn'} variant={'primary'}>BTN</SsButton>);

        expect(screen.getByRole("btn").innerHTML).toEqual("BTN");
    });
});
