import React from 'react'

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ChefHat, Sparkles, Star, ArrowRight, CheckCircle } from "lucide-react";
import { useEffect, useRef } from "react";
const Testimonial = () => {
  return (
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
								"I love how Sub AI understands dietary needs. It helped
								me find plant-based substitutes without compromising
								flavor. Total game changer!"
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
								"Sub AI saved my dinner party when I realized I was out
								of heavy cream. The coconut milk substitute worked
								perfectly!"
							</p>
							<div className="mt-4 text-sm text-muted-foreground ">
								Sarah Chen
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
  );
}

export default Testimonial