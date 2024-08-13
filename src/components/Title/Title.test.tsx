import { render, screen } from "@testing-library/react";
import Title from ".";

describe("Title", () => {
  it("renders the children", () => {
    const title = "TEST";

    render(<Title>{title}</Title>);

    const titleRendered = screen.getByRole("heading");

    expect(titleRendered).toHaveTextContent(title);
  });
});
