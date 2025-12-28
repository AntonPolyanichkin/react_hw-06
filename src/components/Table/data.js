export const usersData = Array.from({ length: 5000 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  age: 18 + (i % 50),
  city: ["Kyiv", "Lviv", "Odesa", "Dnipro"][i % 4],
}));
