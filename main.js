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
    btn.classList.add("active")
}

async function injectHTML(filePath, elem) {
	try {
		const response = await fetch(filePath);
		if (!response.ok) {
			return;
		}

		const text = await response.text();
		elem.innerHTML = text;

		injectAll();
	} catch (err) {
		console.error(err.message);
	}
}

function injectAll() {
	document.querySelectorAll("div[include]").forEach((elem) => {
		injectHTML(elem.getAttribute("include"), elem);
		elem.removeAttribute("include");
	});
}

injectAll();
