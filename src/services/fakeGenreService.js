export const genres = [
  { _id: "5df5b7146645a4361c4520ca", name: "frozen product" },
  { _id: "5df5b7146645a4361c4520c6", name: "fruits" },
  { _id: "5df5b7146645a4361c4520d2", name: "Beverages" },
  { _id: "5df5b7146645a4361c4520ce", name: "vegetables" }
];

export function getGenres() {
  return genres.filter(g => g);
}
