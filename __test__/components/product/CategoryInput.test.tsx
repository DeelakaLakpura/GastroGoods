import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CategoryInput from "@/app/components/inputs/CategoryInput";
import { IconType } from "react-icons";
// Import any other dependencies your component may have

// Mock the onClick function
const mockOnClick = jest.fn();

// Mock the IconType to use in the test
const mockIcon: IconType = ({ size }) => <div data-testid="mock-icon" />;

// Test cases
describe("CategoryInput component", () => {
  it("renders correctly", () => {
    const { getByText, getByTestId } = render(
      <CategoryInput label="Test Label" icon={mockIcon} onClick={mockOnClick} />
    );

    // Check if the label and icon are rendered
    expect(getByText("Test Label")).toBeInTheDocument();
    expect(getByTestId("mock-icon")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const { getByText } = render(
      <CategoryInput label="Test Label" icon={mockIcon} onClick={mockOnClick} />
    );

    // Simulate a click event
    fireEvent.click(getByText("Test Label"));

    // Check if the onClick function is called with the correct value
    expect(mockOnClick).toHaveBeenCalledWith("Test Label");
  });

  it("applies styles based on 'selected' prop", () => {
    const { container, rerender } = render(
      <CategoryInput label="Test Label" icon={mockIcon} onClick={mockOnClick} />
    );

    // Check initial styles
    expect(container.firstChild).toHaveClass("border-slate-200");

    // Rerender with 'selected' prop set to true
    rerender(
      <CategoryInput
        label="Test Label"
        icon={mockIcon}
        onClick={mockOnClick}
        selected={true}
      />
    );

    // Check updated styles
    expect(container.firstChild).toHaveClass("border-slate-500");
  });
});
