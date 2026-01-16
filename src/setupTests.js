// src/setupTests.js
import "@testing-library/jest-dom";

beforeEach(() => {
  jest.spyOn(window, "confirm").mockImplementation(() => true);
});
