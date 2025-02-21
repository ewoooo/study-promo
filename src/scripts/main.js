import Lenis from "lenis";
import { Navigation } from "./navigation";

// Global Smooth Scroller
document.addEventListener("DOMContentLoaded", () => {
	const lenis = new Lenis({ autoRaf: true });

	lenis.on("scroll", (e) => {
		console.log(e);
	});
});

window.addEventListener("DOMContentLoaded", () => {});
