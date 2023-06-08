import { describe, expect, it } from "vitest";

import { isUrl } from "./isUrl";

describe("isUrl", () => {
  it.each([
    "https://example.com",
    "http://example.com",
    "https://example.com/path/to/page",
    "https://example.com/path/to/page?query=string",
    "https://example.com/path/to/page?query=string#hash",
    "https://example.com/path/to/page#hash",
    "https://example.com:8080",
    "https://example.com:8080/path/to/page",
    "https://example.com:8080/path/to/page?query=string",
    "https://example.com:8080/path/to/page?query=string#hash",
    "https://example.com:8080/path/to/page#hash",
    "https://example.com:8080/path/to/page?query=string&query=string",
  ])("URLの時、trueを返す", (url) => {
    expect(isUrl(url)).toBe(true);
  });

  it.each([
    "example.com",
    "example.com/path/to/page",
    "example.com/path/to/page?query=string",
    "example.com/path/to/page?query=string#hash",
    "example.com/path/to/page#hash",
    "example.com:8080",
    "example.com:8080/path/to/page",
    "example.com:8080/path/to/page?query=string",
    "example.com:8080/path/to/page?query=string#hash",
    "example.com:8080/path/to/page#hash",
    "example.com:8080/path/to/page?query=string&query=string",
  ])("URLでない時、falseを返す", (url) => {
    expect(isUrl(url)).toBe(false);
  });
});
