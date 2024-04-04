// PathMark: ./src/conflicts/code-samples/js.test.js

/*
     !!! DO NOT EDIT !!!

    This is the baseline JS code. If you found an anomaly,
    Add a new file to this folder and the list of files to lint.

    !!! DO NOT EDIT !!!

*/

const jsCodeToLint = `
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
// eslint-config: jest-specific, focusing on best practices and avoiding code smells
// PathMark: ./test/refinedTestExamples.test.js

/**
 * Demonstrates best practices for linting Jest and testing-library test suites, focusing on formatting, avoiding code smells,
 * and adhering to best practices.
 */

// Import statements for testing libraries (assumed for context, as imports themselves don't generally have linting issues specific to tests)
import { describe, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';

// Example of proper test grouping and description
describe('Component rendering tests', () => {
  // Example of a test case with proper use of test descriptions and async tests
  it('renders the component with necessary props', async () => {
    render(<YourComponent propValue="test" />);

    // Best practice: Use screen.findBy* for async elements
    const element = await screen.findByText(/test/i);
    expect(element).toBeInTheDocument();
  });

  // Avoiding code smells: Using appropriate matchers for clarity
  it('updates the component state on action', () => {
    // Mock function to simulate state change or action
    const mockAction = jest.fn();

    render(<YourComponent onAction={mockAction} />);
    // Assuming an action like click, which is not shown for brevity
    // Best practice: Directly testing the effect of the action
    expect(mockAction).toHaveBeenCalledTimes(1);
  });
});

// Proper formatting for readability and maintenance
describe('Async data fetching tests', () => {
  // Avoiding anti-patterns: Not using waitForElementToBeRemoved without checking visibility first
  it('fetches and displays the data', async () => {
    // Mock async data fetching
    render(<DataFetchingComponent />);
    const dataElement = await screen.findByRole('list');

    // Ensuring elements are visible before asserting
    expect(dataElement).toBeVisible();
    expect(dataElement.children).toHaveLength(expectedData.length); // Assuming expectedData is defined elsewhere
  });
});

// Import statements assumed for Jest and testing-library functionalities
const { describe, it, expect, beforeEach, afterEach, jest } = require('@jest/globals');
const { render, screen, cleanup } = require('@testing-library/react');

// Example 1: Proper cleanup to avoid leaks in tests
afterEach(() => {
  cleanup(); // Ensures the DOM is cleaned up after each test to prevent state leakage between tests
});

// Example 2: Using beforeEach for common setup
let mockData;
beforeEach(() => {
  mockData = { key: 'value' }; // Common setup for multiple tests, ensuring tests are independent
});

// Example 3: Correct async testing pattern
it('handles async operations correctly', async () => {
  const asyncMock = jest.fn().mockResolvedValue(true); // Mocking an async function
  await expect(asyncMock()).resolves.toBe(true); // Correct pattern for testing promises
});

// Example 4: Avoid using large inline mocks
const largeMockData = { /* large dataset */ }; // Avoid: Large inline mock data should be moved to an external file or setup

// Example 5: Proper use of test descriptions
it('renders correctly based on props', () => { // Clear and concise test description
  render(<Component prop={mockData} />);
  // Test implementation
});

// Example 6: Testing for negative outcomes
it('does not render with invalid props', () => {
  const { queryByText } = render(<Component invalidProp />);
  expect(queryByText(/valid content/i)).toBeNull(); // Checking that content is not rendered
});

// Example 7: Grouping tests logically
describe('Component interaction tests', () => {
  it('responds to user input', () => {
    // Test for user interaction
  });

  it('updates state on user action', () => {
    // Test for state update
  });
}); // Logical grouping helps in understanding related tests

// Example 8: Mocking modules
jest.mock('module-name'); // Mock entire module for isolation of the test environment

// Example 9: Using test.each for parameterized tests
test.each([[1, 1, 2], [1, 2, 3], [2, 2, 4]])(
  'adds %i and %i to equal %i', (a, b, expected) => {
    expect(a + b).toBe(expected); // Parameterized tests for concise, repeatable test cases
  }
);

// Example 10: Avoiding redundant test wrappers
it('is a redundant wrapper', () => {
  expect(true).toBe(true); // Avoid: Redundant or trivial tests that do not contribute to coverage or understanding
});

// EOF


`;

export default jsCodeToLint;
// EOF
