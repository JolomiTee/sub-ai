"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ChefHat, Sparkles, Star, ArrowRight, CheckCircle } from "lucide-react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import TeamSection from "@/components/TeamSection";
import Testimonial from "@/components/Testimonial";
import Features from "@/components/Features";

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
			{/* Header */}
			<Header />
			{/* Hero Section */}
			<Hero />
			{/* Features Section */}
			<Features />
			{/* Testimonials Section */}
			<Testimonial />
			{/* Team Section */}
			<TeamSection />
			{/* CTA Section */}
			<CTA />
			{/* Footer */}
			<Footer />
		</div>
	);
}
