import { screen, render } from "@testing-library/react";
import { List } from "./List";
import "@testing-library/jest-dom";
import { ListItem } from "./ListItem";

describe("List", () => {
  it("should render", () => {
    render(<List>ABC</List>);
    const component = screen.getByTestId("list");
    expect(component).toBeVisible();
  });

  it("should render items", () => {
    render(
      <List>
        <ListItem>Item1</ListItem>
        <ListItem>Item2</ListItem>
      </List>
    );
    expect(screen.getByText("Item1")).toBeVisible();
    expect(screen.getByText("Item2")).toBeVisible();
  });

  it("should render items uploading", () => {
    render(
      <List isUpdating>
        <ListItem>Item1</ListItem>
        <ListItem>Item2</ListItem>
      </List>
    );
    expect(screen.getByText("Item1 Updating...")).toBeVisible();
    expect(screen.getByText("Item2 Updating...")).toBeVisible();
  });
});
