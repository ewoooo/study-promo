export class Navigation {
	constructor() {
		this.navigation = undefined;
		this.indicator = undefined;
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
		if (this.navigation && this.indicator) {
			const entries = [this.navigation, this.indicator];
			for (let entry of entries) {
				entry.addEventListener("pointerdown", this.event.bind(this), this);
			}
		}
	}

	event(e) {
		const className = "current";
		// const isCurrent = e.currentTarget.classList.contains(className);

		if (e.currentTarget === this.indicator) {
			this.navigation.classList.add(className);
			this.indicator.classList.remove(className);
		} else {
			this.navigation.classList.remove(className);
			this.indicator.classList.add(className);
		}
	}
}
