import { generateFuzzString, generateString } from "../utils/generateData";
import { faker } from "@faker-js/faker";

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

  // 🔽 Faker-generated test cases
  {
    username: faker.internet.username({ firstName: "Jeanne", lastName: "Doe" }),
    password: faker.internet.password(),
    errors:
      "Epic sadface: Username and password do not match any user in this service",
  },
  {
    username: faker.lorem.word(),
    password: faker.lorem.words(2),
    errors:
      "Epic sadface: Username and password do not match any user in this service",
  },
  {
    username: faker.string.alphanumeric({ length: { min: 5, max: 10 } }),
    password: faker.internet.password(30),
    errors:
      "Epic sadface: Username and password do not match any user in this service",
  },
];
