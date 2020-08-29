import { makeUser } from "./ImpureFunction";

jest.mock("uuid", () => () => "abcde");

test("generates a user with an ID and a fullname", () => {
  // 1) Arrange
  const expected = { id: "abcde", fullName: "Peter Parker" };
  // 2) Act
  const actual = makeUser("Peter", "Parker");
  // 3) Assert
  expect(actual).toEqual(expected);
});
