import type { Action } from 'svelte/action';

export interface RevealOptions {
	/** Extra delay before the element unveils, in ms. Use to stagger a list. */
	delay?: number;
	/** How much of the element must be visible before it unveils, 0..1. */
	threshold?: number;
	/** Shrinks the viewport so elements unveil slightly before their edge. */
	rootMargin?: string;
	/** Unveil once and stop observing. Veiling again on scroll-out is distracting. */
	once?: boolean;
}

const VEILED = 'oi-veiled';
const UNVEILED = 'oi-unveiled';

function prefersReducedMotion(): boolean {
	return (
		typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
	);
}

/**
 * Veils an element on mount and unveils it when it scrolls into view.
 *
 * The veiling happens in JavaScript on purpose: without JS — or without
 * IntersectionObserver — the element is simply never hidden in the first place.
 */
export const reveal: Action<HTMLElement, RevealOptions | undefined> = (node, options) => {
	const {
		delay = 0,
		threshold = 0.12,
		rootMargin = '0px 0px -8% 0px',
		once = true
	} = options ?? {};

	if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
		return {};
	}

	if (delay) node.style.setProperty('--oi-delay', `${delay}ms`);
	node.classList.add(VEILED);

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				node.classList.add(UNVEILED);
				if (once) observer.unobserve(node);
			}
		},
		{ threshold, rootMargin }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
