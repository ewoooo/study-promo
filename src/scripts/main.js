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
	nav.navigator(".nav-item-container");
	nav.indicator(".nav-indicator-wrapper");
	nav.addEventListeners();
	nav.update();
});

window.addEventListener("DOMContentLoaded", () => {
	const cursor = document.querySelector(".hero-button-wrapper");
	const button = document.querySelector(".hero-control-button");
	const panel = document.querySelector(".section-hero");
	const play = document.querySelector(".hero-control-play");
	const pause = document.querySelector(".hero-control-pause");

	let isHover = false;
	let isPlaying = false;
	let preX = 0;
	let preY = 0;
	let targetX = 0;
	let targetY = 0;

	// 애니메이션 프레임 ID 저장용
	let animationFrameId = null;

	const cursorAnimation = () => {
		if (!isHover) {
			// 더 이상 애니메이션을 진행하지 않음
			animationFrameId = null;
			return;
		}

		const d = 0.08; // 보간 계수 (필요에 따라 조정)
		const x = lerp(preX, targetX, d);
		const y = lerp(preY, targetY, d);

		cursor.style.setProperty("--tx", `${x}px`);
		cursor.style.setProperty("--ty", `${y}px`);

		preX = x;
		preY = y;

		animationFrameId = requestAnimationFrame(cursorAnimation);
	};

	function controlVideo(e) {
		if (isPlaying) {
			console.log("Media paused...");
			pause.classList.add("is-active");
			play.classList.remove("is-active");
			isPlaying = false;
		} else {
			console.log("Media is playing...");
			pause.classList.remove("is-active");
			play.classList.add("is-active");
			isPlaying = true;
		}
	}

	function cursorIsHover(e) {
		isHover = true;
		cursor.classList.add("is-hover");
		// 애니메이션이 실행 중이지 않다면 시작
		if (!animationFrameId) {
			animationFrameId = requestAnimationFrame(cursorAnimation);
		}
	}

	function cursorIsMoving(e) {
		// 매번 최신 rect를 계산해줍니다.
		const rect = panel.getBoundingClientRect();
		targetX = e.clientX - rect.x;
		targetY = e.clientY - rect.y;
	}

	function cursorLeft() {
		isHover = false;
		cursor.classList.remove("is-hover");
		// 애니메이션 루프가 중지되도록 함
		if (animationFrameId) {
			cancelAnimationFrame(animationFrameId);
			animationFrameId = null;
		}
	}

	panel.addEventListener("mouseover", cursorIsHover);
	panel.addEventListener("mousemove", cursorIsMoving);
	panel.addEventListener("pointerleave", cursorLeft);
	button.addEventListener("pointerdown", controlVideo);
});

function lerp(a, b, t) {
	const result = a + t * (b - a);
	return Number(result.toFixed(3));
}
