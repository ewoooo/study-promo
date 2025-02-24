export class Navigation {
	constructor() {
		this._navigator = undefined;
		this._indicator = undefined;
		this._parent;
		this.isHovering = false;
	}

	navigator(element) {
		try {
			return (this._navigator = document.querySelector(element));
		} catch {
			return console.error("No navigation founded");
		}
	}

	indicator(element) {
		try {
			return (this._indicator = document.querySelector(element));
		} catch {
			return console.error("No indicator founded");
		}
	}

	get parent() {
		try {
			return (this._parent = this._navigator.closest(".navigation"));
		} catch {
			return console.error("No Parent founded");
		}
	}

	addEventListeners() {
		this._navigator.addEventListener("pointerdown", this.navigatorClick.bind(this));
		this._indicator.addEventListener("pointerdown", this.indicatorClick.bind(this));
		this.parent.addEventListener("mouseleave", this.navigatorLeave.bind(this));
	}

	navigatorClick(e) {
		this.isHovering = false;
		console.log("Click...");

		this.update();
	}

	indicatorClick(e) {
		e.preventDefault();
		console.log("Click...");

		this.isHovering = true;
		this.update();
	}

	navigatorLeave(e) {
		e.preventDefault();
		console.log("LEAVING...");
		this.isHovering = false;
		this.update();
	}

	update() {
		if (this.isHovering) {
			this.parent.classList.add("is-hovering");
		} else {
			this.parent.classList.remove("is-hovering");
		}
	}
}
