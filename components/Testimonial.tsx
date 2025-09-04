import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
const Testimonial = () => {
	return (
		<section className="py-20 bg-[#F9F9F9]">
			<div className="container mx-auto px-4 text-center">
				<div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700">
					<Badge className="mb-6 text-[#1BB425] border-4 border-[#072206]/10 text-sm animate-bounce-subtle rounded-full p-1 flex justify-center item-center mx-auto px-2 bg-white">
						Testimonials
					</Badge>
					<h2 className="font-medium text-4xl md:text-5xl mb-16 text-balance text-[#072206]">
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
};

export default Testimonial;
