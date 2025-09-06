import { ChefHat, Sparkles } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const Hero = () => {
	return (
		<section className="relative bg-hero py-16 overflow-hidden">
			<div className="absolute inset-0 bg-[url('/kitchen-ingredients-floating.png')] opacity-5"></div>
			<div className="container space-y-8 lg:space-y-12 mx-auto px-4 text-center relative z-10">
				<div className="animate-fade-in-up">
					<Badge className="mb-6 text-[#1BB425] text-sm animate-bounce-subtle bg-[#1BB425]/5 rounded-full p-1 flex justify-center item-center mx-auto px-2">
						<div className="rounded-full border bg-white w-[49px] h-[24px] text-xs flex justify-center item-center">
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
						Sub AI instantly suggests the best ingredient substitutions,
						so you can keep cooking without skipping a beat.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delayed">
						<Button
							variant="outline"
							size="lg"
							className="text-lg px-8 h-[48px] bg-transparent hover:bg-[#1BB425] transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-full"
						>
							About the Builders
						</Button>
						<Button
							size="lg"
							className="text-lg px-8 h-[48px] bg-[#1BB425] hover:bg-[#1BB425]/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group rounded-full"
						>
							Try it out for free
						</Button>
					</div>
				</div>

				<div className="w-full max-w-4/5 h-[440px] rounded-lg mx-auto bg-white">
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
	);
};

export default Hero;
