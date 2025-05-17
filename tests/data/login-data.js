import { generateFuzzString, generateString } from "../utils/generateData";

export const invalidLoginData = [
  {
    username: "",
    password: "",
    errors: "Epic sadface: Username is required",
  },
  {
    username: "              ",
    password: "              ",
    errors:
      "Epic sadface: Username and password do not match any user in this service",
  },
  {
    username: "wrong_user",
    password: "",
    errors: "Epic sadface: Password is required",
  },
  {
    username: "wrong_user",
    password: "wrong_password",
    errors:
      "Epic sadface: Username and password do not match any user in this service",
  },
  {
    username: "' OR '1'='1",
    password: "anything",
    errors:
      "Epic sadface: Username and password do not match any user in this service",
  },
  {
    username: generateFuzzString(20, "xss"),
    password: "anything",
    errors:
      "Epic sadface: Username and password do not match any user in this service",
  },
  {
    username: generateString(100, "a"),
    password: generateString(100, "a"),
    errors:
      "Epic sadface: Username and password do not match any user in this service",
  },
  {
    username: "a",
    password: "a",
    errors:
      "Epic sadface: Username and password do not match any user in this service",
  },
  {
    username: generateFuzzString(10, "emoji"),
    password: generateFuzzString(10, "emoji"),
    errors:
      "Epic sadface: Username and password do not match any user in this service",
  },
  {
    username: generateFuzzString(15, "mixed"),
    password: generateFuzzString(15, "mixed"),
    errors:
      "Epic sadface: Username and password do not match any user in this service",
  },
];
