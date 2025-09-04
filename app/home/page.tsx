"use client";

import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TeamSection from "@/components/TeamSection";
import Testimonial from "@/components/Testimonial";
import { useEffect, useRef } from "react";

export default function LandingPage() {
	const observerRef = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		observerRef.current = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Use a unique class name to avoid clashing with third-party
						// animation utilities named `animate-in`.
						entry.target.classList.add("is-visible");
					}
				});
			},
			{ threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
		);

		const elements = document.querySelectorAll(".scroll-animate");
		elements.forEach((el) => observerRef.current?.observe(el));

		return () => observerRef.current?.disconnect();
	}, []);

	return (
		<div className="min-h-screen bg-background font-geist-sans">
			<Header />
			<Hero />
			<Features />
			<Testimonial />
			<TeamSection />
			<CTA />
			<Footer />
		</div>
	);
}
