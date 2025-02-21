export class Navigation {
	constructor() {
		this.navigation = undefined;
		this.indicator = undefined;
		this.isActive = false;
	}

	set(element) {
		try {
			return (this.navigation = document.querySelector(element));
		} catch {
			return console.error("No navigation founded");
		}
	}

	indicate(element) {
		try {
			return (this.indicator = document.querySelector(element));
		} catch {
			return console.error("No indicator founded");
		}
	}

	addEventListeners() {
		if (!this.navigation) return console.error("Navigation is not loaded.");
		if (this.indicator) this.indicator.addEventListener("pointerdown", this.indicatorEvent.bind(this));
		this.navigation.addEventListener("pointerdown", this.navigationEvent.bind(this));
	}

	indicatorEvent(e) {
		this.indicator.classList.add("");
		this.navigation.classList.add("");
	}
}
