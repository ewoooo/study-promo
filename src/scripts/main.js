import Lenis from "lenis";
import { Navigation } from "./navigation";

// Global Smooth Scroller
document.addEventListener("DOMContentLoaded", () => {
	const lenis = new Lenis({ autoRaf: true });

	lenis.on("scroll", (e) => {
		console.log(e);
	});
});

window.addEventListener("DOMContentLoaded", () => {
	const nav = new Navigation();
	nav.set("#global-nav-navigation");
	nav.indicate("#global-nav-indicator");
	nav.addEventListeners();
});
