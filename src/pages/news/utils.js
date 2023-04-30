export const newArray = (array, image, author, url, description) => {
   return array?.filter((article) => article[image] !== null || "").filter((article) => article[author] !==  "").filter((article) => article[url] !== "").filter((article) => article[description] !== null || "").slice(0, 4);
};