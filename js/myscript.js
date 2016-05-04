var link = document.querySelector(".search-button");
var searchForm = document.querySelector(".search-form");

link.addEventListener("click", function(event) {
event.preventDefault();
if (searchForm.classList.contains("search-form-visible")) {
searchForm.classList.remove("search-form-visible");
}
else {
searchForm.classList.add("search-form-visible");
};
});
