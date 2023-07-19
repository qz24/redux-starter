import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IndexPage from "../../pages/Index";
import { Provider } from "react-redux";
import store from "../../state/store";

// jest.mock("../../pages/Index.tsx", () => (_: IndexPageProps) => (
// 	<p data-testid="index-page">Try Me!</p>
// ));

describe("IndexPage", () => {
	afterEach(() => {
		cleanup();
	});
	it("should render IndexPage component", async () => {
		render(
			<Provider store={store}>
				<IndexPage />
			</Provider>
		);
		await userEvent.click(screen.getByText("Increment!"));
		await userEvent.click(screen.getByText("Increment!"));
		expect(screen.getByTestId("counter-display")).toHaveTextContent(
			"Counter: 2"
		);
	});
	it("should render IndexPage components", async () => {
		render(
			<Provider store={store}>
				<IndexPage />
			</Provider>
		);
		await userEvent.click(screen.getByText("Increment!"));
		await userEvent.click(screen.getByText("Increment!"));
		expect(screen.getByTestId("counter-display")).toHaveTextContent(
			"Counter: 2"
		);
	});
});
