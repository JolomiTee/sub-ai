"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ChefHat, Sparkles, Star, ArrowRight, CheckCircle } from "lucide-react";
import { useEffect, useRef } from "react";
import Image from "next/image";

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
			<header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 transition-all duration-300 hover:bg-background/98">
				<div className="container w-[80%] mx-auto px-4 h-16 flex items-center justify-between">
					<div className="flex items-center gap-2 group">
						<Image
							src="/logo.svg"
							width={30}
							height={30}
							alt="SubAI logo"
						/>
						<span className="font-space-grotesk font-bold text-xl">
							Sub AI
						</span>
					</div>
					<div className="flex items-center gap-4">
						<Button
							variant="ghost"
							className=" transition-all duration-300 hover:scale-105"
						>
							Login
						</Button>
						<Button className=" bg-[#1BB425] hover:bg-[#1BB425]/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
							Try Free
						</Button>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className="relative bg-hero py-16 overflow-hidden">
				<div className="absolute inset-0 bg-[url('/kitchen-ingredients-floating.png')] opacity-5"></div>
				<div className="container space-y-8 lg:space-y-12 mx-auto px-4 text-center relative z-10">
					<div className="animate-fade-in-up">
						<Badge className="mb-6 text-[#1BB425] text-sm animate-bounce-subtle bg-[#1BB425]/5 rounded-full p-1 flex justify-center item-center mx-auto px-2">
							<div className="rounded-full border border-[#1BB425] bg-white w-[49px] h-[24px] text-xs flex justify-center item-center">
								v&nbsp;1.0
							</div>
							Exploration turns product
						</Badge>
						<h1 className="font-medium text-5xl md:text-[56px] leading-[66px] tracking-[-1.5px] mb-6 text-balance animate-slide-up text-[#072206]">
							Missing an Ingredient?
							<br />
							<span className="animate-gradient-text">
								Meet Your AI Sidekick
							</span>
						</h1>
						<p className=" text-xl text-[#475367] mb-8 max-w-2xl mx-auto text-pretty animate-fade-in-delayed">
							Sub AI instantly suggests the best ingredient
							substitutions, so you can keep cooking without skipping a
							beat.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delayed">
							<Button
								variant="outline"
								size="lg"
								className="text-lg px-8 py-6 bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-full"
							>
								About the Builders
							</Button>
							<Button
								size="lg"
								className="text-lg px-8 py-6 bg-[#1BB425] hover:bg-[#1BB425]/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group rounded-full"
							>
								Try it out for free
							</Button>
						</div>
					</div>

					<div className="w-full max-w-3/4 h-[440px] rounded-lg mx-auto bg-white">
						hello
					</div>
				</div>
				<div className="absolute top-20 left-10 animate-float">
					<div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110">
						<ChefHat className="w-8 h-8 text-accent" />
					</div>
				</div>
				<div
					className="absolute top-32 right-16 animate-float"
					style={{ animationDelay: "1s" }}
				>
					<div className="w-12 h-12 bg-[#1BB425]/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110">
						<Sparkles className="w-6 h-6 text-[#1BB425] animate-spin-slow" />
					</div>
				</div>
				<div
					className="absolute bottom-20 left-1/4 animate-float"
					style={{ animationDelay: "2s" }}
				>
					<div className="w-8 h-8 bg-secondary/30 rounded-full animate-pulse"></div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 bg-background">
				<div className="container mx-auto px-4 text-center">
					<div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700">
						<Badge className="mb-6 text-[#1BB425] border-4 border-[#072206]/10 text-sm animate-bounce-subtle rounded-full p-1 flex justify-center item-center mx-auto px-2 bg-white">
							Benefits
						</Badge>
						<h2 className="font-medium text-4xl md:text-5xl mb-6 text-balance leading-[56px] tracking-[-1.2px]">
							The help you didn't know
							<br />
							you needed
						</h2>
						<p className=" text-xl text-[#475367] mb-12 max-w-2xl mx-auto">
							Sub AI saves time, reduces kitchen stress, and cooks with
							confidence, no matter what's in your pantry
						</p>
						<Button className="rounded-full mb-16 bg-[#1BB425] hover:bg-[#1BB425]/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
							Try Sub AI now
						</Button>
					</div>

					<div className="max-w-md mx-auto scroll-animate opacity-0 translate-y-8 transition-all duration-700">
						<Card className="p-6 text-left transition-all duration-300 hover:shadow-xl hover:scale-105 group">
							<CardContent className="p-0 space-y-4">
								<div className="flex items-start gap-3 transition-all duration-300 group-hover:translate-x-2">
									<CheckCircle className="w-5 h-5 text-[#1BB425] mt-1 flex-shrink-0 transition-all duration-300 group-hover:scale-110" />
									<div>
										<h3 className="font-space-grotesk font-semibold mb-1">
											1. Pantry
										</h3>
										<p className=" text-sm text-muted-foreground">
											Tell us what you have and what you're missing
										</p>
									</div>
								</div>
								<div
									className="flex items-start gap-3 transition-all duration-300 group-hover:translate-x-2"
									style={{ transitionDelay: "100ms" }}
								>
									<CheckCircle className="w-5 h-5 text-[#1BB425] mt-1 flex-shrink-0 transition-all duration-300 group-hover:scale-110" />
									<div>
										<h3 className="font-space-grotesk font-semibold mb-1">
											2. Balanced Search
										</h3>
										<p className=" text-sm text-muted-foreground">
											We find the perfect substitute that matches
											flavor and function
										</p>
									</div>
								</div>
								<div
									className="flex items-start gap-3 transition-all duration-300 group-hover:translate-x-2"
									style={{ transitionDelay: "200ms" }}
								>
									<CheckCircle className="w-5 h-5 text-[#1BB425] mt-1 flex-shrink-0 transition-all duration-300 group-hover:scale-110" />
									<div>
										<h3 className="font-space-grotesk font-semibold mb-1">
											3. Smart Substitute
										</h3>
										<p className=" text-sm text-muted-foreground">
											Get your dish back on track with confidence
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
						<div className="mt-8 p-4 bg-accent/10 rounded-lg transition-all duration-300 hover:bg-accent/20 hover:scale-105">
							<div className="flex items-center gap-2 text-accent  font-medium">
								<Sparkles className="w-4 h-4 animate-pulse" />
								Continuous Suggestions
							</div>
							<p className=" text-sm text-muted-foreground mt-1">
								Get instant, accurate replacements based on what you're
								cooking.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-20 bg-muted/30">
				<div className="container mx-auto px-4 text-center">
					<div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700">
						<Badge variant="secondary" className="mb-6 ">
							Testimonials
						</Badge>
						<h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-16 text-balance">
							Still unsure? These cooks
							<br />
							were too, until they tried it.
						</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						<Card className="p-6 text-left scroll-animate opacity-0 translate-y-8 transition-all duration-700 hover:shadow-xl hover:scale-105 group">
							<CardContent className="p-0">
								<div className="flex items-start gap-4 mb-4">
									<Avatar className="w-12 h-12 transition-all duration-300 group-hover:scale-110">
										<AvatarImage src="/professional-chef-headshot.png" />
										<AvatarFallback>SH</AvatarFallback>
									</Avatar>
									<div>
										<h4 className="font-space-grotesk font-semibold">
											So Handy
										</h4>
										<div className="flex text-yellow-400 text-sm">
											{[...Array(5)].map((_, i) => (
												<Star
													key={i}
													className="w-4 h-4 fill-current transition-all duration-300 hover:scale-125"
													style={{
														transitionDelay: `${i * 100}ms`,
													}}
												/>
											))}
										</div>
									</div>
								</div>
								<p className=" text-muted-foreground">
									"I love how Sub AI understands dietary needs. It
									helped me find plant-based substitutes without
									compromising flavor. Total game changer!"
								</p>
								<div className="mt-4 text-sm text-muted-foreground ">
									Ryan Taylor
								</div>
							</CardContent>
						</Card>

						<Card
							className="p-6 text-left scroll-animate opacity-0 translate-y-8 transition-all duration-700 hover:shadow-xl hover:scale-105 group"
							style={{ transitionDelay: "200ms" }}
						>
							<CardContent className="p-0">
								<div className="flex items-start gap-4 mb-4">
									<Avatar className="w-12 h-12 transition-all duration-300 group-hover:scale-110">
										<AvatarImage src="/home-cook-smiling.png" />
										<AvatarFallback>BL</AvatarFallback>
									</Avatar>
									<div>
										<h4 className="font-space-grotesk font-semibold">
											Best thing since...
										</h4>
										<div className="flex text-yellow-400 text-sm">
											{[...Array(5)].map((_, i) => (
												<Star
													key={i}
													className="w-4 h-4 fill-current transition-all duration-300 hover:scale-125"
													style={{
														transitionDelay: `${i * 100}ms`,
													}}
												/>
											))}
										</div>
									</div>
								</div>
								<p className=" text-muted-foreground">
									"Sub AI saved my dinner party when I realized I was
									out of heavy cream. The coconut milk substitute
									worked perfectly!"
								</p>
								<div className="mt-4 text-sm text-muted-foreground ">
									Sarah Chen
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="py-20 bg-background">
				<div className="container mx-auto px-4 text-center">
					<div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700">
						<Badge variant="secondary" className="mb-6 ">
							The team
						</Badge>
						<h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-6 text-balance">
							Meet the builders
						</h2>
						<p className=" text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
							We're passionate about making cooking accessible and fun.
							Sub AI — a working product. Meet the guys who cooked it up.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						<Card className="overflow-hidden scroll-animate opacity-0 translate-y-8 transition-all duration-700 hover:shadow-xl hover:scale-105 group">
							<div className="h-32 bg-gradient-to-br from-pink-400 to-orange-400 transition-all duration-500 group-hover:from-pink-500 group-hover:to-orange-500"></div>
							<CardContent className="p-6 text-left">
								<div className="flex items-start gap-4 mb-4">
									<Avatar className="w-16 h-16 border-4 border-background -mt-8 transition-all duration-300 group-hover:scale-110">
										<AvatarImage src="/tech-founder-headshot.png" />
										<AvatarFallback>QS</AvatarFallback>
									</Avatar>
									<div className="mt-2">
										<h3 className="font-space-grotesk font-bold text-xl">
											Quake Silver
										</h3>
										<p className=" text-muted-foreground">
											Co-founder
										</p>
									</div>
								</div>
								<p className=" text-sm text-muted-foreground mb-4">
									I specialize in creating user-friendly designs that
									make products easier and more enjoyable to use. I'm
									passionate about understanding user needs.
								</p>
								<div className="flex gap-2">
									<Button
										size="sm"
										variant="outline"
										className="w-8 h-8 p-0 bg-transparent transition-all duration-300 hover:scale-110 hover:bg-[#1BB425] hover:text-[#1BB425]-foreground"
									>
										<span className="sr-only">Twitter</span>𝕏
									</Button>
									<Button
										size="sm"
										variant="outline"
										className="w-8 h-8 p-0 bg-transparent transition-all duration-300 hover:scale-110 hover:bg-[#1BB425] hover:text-[#1BB425]-foreground"
									>
										<span className="sr-only">LinkedIn</span>
										in
									</Button>
									<Button
										size="sm"
										variant="outline"
										className="w-8 h-8 p-0 bg-transparent transition-all duration-300 hover:scale-110 hover:bg-[#1BB425] hover:text-[#1BB425]-foreground"
									>
										<span className="sr-only">GitHub</span>
										gh
									</Button>
								</div>
							</CardContent>
						</Card>

						<Card
							className="overflow-hidden scroll-animate opacity-0 translate-y-8 transition-all duration-700 hover:shadow-xl hover:scale-105 group"
							style={{ transitionDelay: "200ms" }}
						>
							<div className="h-32 bg-gradient-to-br from-purple-400 to-blue-400 transition-all duration-500 group-hover:from-purple-500 group-hover:to-blue-500"></div>
							<CardContent className="p-6 text-left">
								<div className="flex items-start gap-4 mb-4">
									<Avatar className="w-16 h-16 border-4 border-background -mt-8 transition-all duration-300 group-hover:scale-110">
										<AvatarImage src="/tech-developer-headshot.png" />
										<AvatarFallback>FG</AvatarFallback>
									</Avatar>
									<div className="mt-2">
										<h3 className="font-space-grotesk font-bold text-xl">
											Fortunate
										</h3>
										<p className=" text-muted-foreground">
											Co-founder
										</p>
									</div>
								</div>
								<p className=" text-sm text-muted-foreground mb-4">
									AI developer who enjoys all things about perfect
									design to life. With a keen eye for detail and a love
									for clean, functional designs.
								</p>
								<div className="flex gap-2">
									<Button
										size="sm"
										variant="outline"
										className="w-8 h-8 p-0 bg-transparent transition-all duration-300 hover:scale-110 hover:bg-[#1BB425] hover:text-[#1BB425]-foreground"
									>
										<span className="sr-only">Twitter</span>𝕏
									</Button>
									<Button
										size="sm"
										variant="outline"
										className="w-8 h-8 p-0 bg-transparent transition-all duration-300 hover:scale-110 hover:bg-[#1BB425] hover:text-[#1BB425]-foreground"
									>
										<span className="sr-only">LinkedIn</span>
										in
									</Button>
									<Button
										size="sm"
										variant="outline"
										className="w-8 h-8 p-0 bg-transparent transition-all duration-300 hover:scale-110 hover:bg-[#1BB425] hover:text-[#1BB425]-foreground"
									>
										<span className="sr-only">GitHub</span>
										gh
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-[#1BB425] text-[#1BB425]-foreground overflow-hidden relative">
				<div className="absolute inset-0 bg-[url('/3d-colorful-blocks-pattern.png')] opacity-20"></div>
				<div className="container mx-auto px-4 relative z-10">
					<div className="max-w-2xl scroll-animate opacity-0 translate-y-8 transition-all duration-700">
						<h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-6 text-balance">
							We enjoy building random stuffs, for random use
						</h2>
						<p className=" text-xl mb-8 opacity-90">
							If you want to build something together, or just want to
							say hi, we'd love to hear from you.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Button
								size="lg"
								variant="secondary"
								className=" text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
							>
								Right, message us
							</Button>
							<Button
								size="lg"
								variant="outline"
								className=" text-lg px-8 py-6 border-[#1BB425]-foreground/20 text-[#1BB425]-foreground hover:bg-[#1BB425]-foreground/10 bg-transparent transition-all duration-300 hover:scale-105"
							>
								Get in touch
							</Button>
						</div>
					</div>
				</div>
				<div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-30">
					<div className="w-full h-full bg-gradient-to-br from-accent/30 to-secondary/30 rounded-full animate-float animate-pulse"></div>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-12 bg-muted/30 border-t border-border">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<div className="flex items-center gap-2 group">
							<div className="w-6 h-6 bg-[#1BB425] rounded flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
								<ChefHat className="w-4 h-4 text-[#1BB425]-foreground" />
							</div>
							<span className="font-space-grotesk font-bold">
								Sub AI
							</span>
							<span className=" text-sm text-muted-foreground">
								built with ❤️ and 🍳
							</span>
						</div>
						<div className="flex items-center gap-6 text-sm text-muted-foreground ">
							<span>2024</span>
							<Button
								variant="ghost"
								size="sm"
								className="h-auto p-0 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
							>
								Privacy
							</Button>
							<Button
								variant="ghost"
								size="sm"
								className="h-auto p-0 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
							>
								Terms
							</Button>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
