export function generateString(length, char = "a") {
  return char.repeat(length);
}

export function generateFuzzString(length, type = "mixed") {
  const sets = {
    ascii: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:',.<>/?`~",
    whitespace: " \t\n\r\v\f",
    emoji: "😊😂💀💣🔥🚀🎉🧠",
    xss: "<script>alert('xss')</script>",
    mixed:
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:',.<>/?`~ \t\n\r\v\f😊😂💀💣🔥🚀🎉🧠\"'\\",
  };

  const chars = sets[type] || sets["mixed"];
  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
}
