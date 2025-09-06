import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import { CheckCircle, Sparkles } from "lucide-react";
const Features = () => {
	const cards = [
		{
			img: "/benefit-1.png",
			title: "AI-Powered Suggestions",
			color: "#FFA500",
			icon: "/benefits-1-icon.svg",
			text: "Get instant, accurate replacements based on what you're cooking.",
		},
		{
			img: "/benefit-2.png",
			title: "Cook Without Interruptions",
			color: "#2276FF",
			icon: "/benefits-2-icon.svg",
			text: "Never pause a recipe because of one missing item again.",
		},
		{
			img: "/benefit-3.png",
			title: "Health & Dietary Options",
			color: "#008000",
			icon: "/benefits-3-icon.svg",
			text: "Find vegan, gluten-free, or allergy-safe alternatives easily.",
		},
	];
	return (
		<section className="py-16 bg-[#F9F9F9]">
			<div className="container mx-auto px-4 text-center">
				<div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700">
					<Badge className="mb-6 text-[#1BB425] border-4 border-[#072206]/10 text-sm animate-bounce-subtle rounded-full p-1 flex justify-center item-center mx-auto px-2 bg-white">
						Benefits
					</Badge>
					<h2 className="font-medium text-4xl md:text-5xl mb-6 text-balance leading-[56px] tracking-[-1.2px] text-[#072206]">
						The help you didn't know
						<br />
						you needed
					</h2>
					<p className=" text-xl text-[#475367] mb-4 max-w-[548px] mx-auto">
						Sub AI saves time, reduces kitchen stress, and cooks with
						confidence, no matter what's in your pantry
					</p>
					<Button className="rounded-full mb-[44px] h-[48px] w-[154px] bg-[#1BB425] hover:bg-[#1BB425]/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
						Try Sub AI now
					</Button>
				</div>

				<div className="py-[38px] border mx-auto scroll-animate opacity-0 translate-y-8 space-y-6 transition-all duration-700 max-h-[528px] overflow-y-scroll">
					{cards.map((item, index) => (
						<Card
							key={index}
							className="p-[24px] bg-white pb-[40px] transition-all duration-300 hover:shadow-xl hover:scale-105 group border-[#EEEEEE] max-w-[448px] gap-4 mx-auto"
						>
							<CardHeader className="p-0">
								<Image
									src={item.img}
									alt={item.title}
									width={416}
									height={280}
									className="h-auto"
								/>
							</CardHeader>
							<CardContent className="p-0">
								<div className="transition-all duration-300 hover:scale-105 text-center space-y-4">
									<div
										className={`flex items-center gap-2 font-medium justify-center`}
										style={{
											color: item.color,
										}}
									>
										{item.title}
										<Image
											alt=""
											width={12}
											height={12}
											src={item.icon}
											className="size-5"
										/>
									</div>
									<p className="max-w-[320px] mx-auto text-sm text-muted-foreground mt-1">
										{item.text}
									</p>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
