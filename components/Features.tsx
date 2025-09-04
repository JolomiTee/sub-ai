import React from 'react'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ChefHat, Sparkles, Star, ArrowRight, CheckCircle } from "lucide-react";
import { useEffect, useRef } from "react";
import Image from 'next/image';
const Features = () => {
  return (
		<section className="py-20 bg-[#F9F9F9]">
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
					<p className=" text-xl text-[#475367] mb-4 max-w-2xl mx-auto">
						Sub AI saves time, reduces kitchen stress, and cooks with
						confidence, no matter what's in your pantry
					</p>
					<Button className="rounded-full mb-16 h-[48px] w-[154px] bg-[#1BB425] hover:bg-[#1BB425]/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
						Try Sub AI now
					</Button>
				</div>

				<div className="max-w-md mx-auto scroll-animate opacity-0 translate-y-8 transition-all duration-700 benefit-bg">
					<div className="p-3">
						<Image
							src={"/benefits-bg.svg"}
							width={500}
							height={500}
							alt=""
						/>
					</div>
					{/* <Card className="p-6 text-left transition-all duration-300 hover:shadow-xl hover:scale-105 group">
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
							<div className="mt-8 p-4 bg-accent/10 rounded-lg transition-all duration-300 hover:bg-accent/20 hover:scale-105">
								<div className="flex items-center gap-2 text-accent  font-medium">
									<Sparkles className="w-4 h-4 animate-pulse" />
									Continuous Suggestions
								</div>
								<p className=" text-sm text-muted-foreground mt-1">
									Get instant, accurate replacements based on what
									you're cooking.
								</p>
							</div>
						</Card> */}
				</div>
			</div>
		</section>
  );
}

export default Features