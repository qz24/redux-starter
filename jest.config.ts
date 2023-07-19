export default {
	// collectCoverage: true,
	// collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},

	// Runs special logic, such as cleaning up components
	// when using React Testing Library and adds special
	// extended assertions to Jest
	setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
	// setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
	// coverageDirectory: "coverage",
	testEnvironment: "jsdom",
};
