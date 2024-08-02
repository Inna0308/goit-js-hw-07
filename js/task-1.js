const categoriesList = document.querySelector("#categories");
const items = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const itemTitle = item.querySelector("h2").textContent;
  const itemCount = item.querySelectorAll("li").length;
  console.log(`Category: ${itemTitle}`);
  console.log(`Elements: ${itemCount}`);
});
