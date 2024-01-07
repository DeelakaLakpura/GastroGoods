import { render, screen } from "@testing-library/react";
import AdminNav from "@/app/components/admin/AdminNav";
import { useRouter } from "next/router"; // Mocking next/router

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
})); 

describe("AdminNav", () => {
  it("renders the component", () => {
    useRouter.mockReturnValueOnce({ pathname: "/admin" });

    render(<AdminNav />);

    // Assert that the component renders correctly
    expect(screen.getByText("Summary")).toBeInTheDocument();
    expect(screen.getByText("AddProducts")).toBeInTheDocument();
    expect(screen.getByText("ManageProducts")).toBeInTheDocument();
    expect(screen.getByText("ManageOrders")).toBeInTheDocument();
  });

  it("highlights the selected link based on the pathname", () => {
    useRouter.mockReturnValueOnce({ pathname: "/admin/manage-products" });

    render(<AdminNav />);

    // Assert that the correct link is selected based on the pathname
    expect(screen.getByText("Summary")).not.toHaveClass("selected");
    expect(screen.getByText("AddProducts")).not.toHaveClass("selected");
    expect(screen.getByText("ManageOrders")).not.toHaveClass("selected");
  });
});
