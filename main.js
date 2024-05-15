// List View
function listView(e) {
	document.getElementById("product_grid").classList.add("list");
	setActiveBtn(e);
}

// Grid View
function gridView(e) {
	document.getElementById("product_grid").classList.remove("list");
	setActiveBtn(e);
}

function setActiveBtn(btn) {
	document.getElementsByClassName("active")[0].classList.remove("active");
	btn.classList.add("active");
}
