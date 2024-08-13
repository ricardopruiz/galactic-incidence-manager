import { render, screen } from "@testing-library/react";
import ColorBullet from ".";
import { Label } from "@/types/incidence";

const mockStatus: Label = {
  name: "ALTA",
  color: "red",
  id: "w",
  idBoard: "333",
  uses: 1,
};

describe("ColorBullet", () => {
  it("should render the ColorBullet component", () => {
    render(<ColorBullet status={mockStatus} />);

    const bullet = screen.getByRole("priority-indicator");
    expect(bullet).toHaveStyle(`background-color: ${mockStatus.color}`);
  });
});
