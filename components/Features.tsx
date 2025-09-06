import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FeaturesCarousel from "./carousel/FeaturesCarousel";
import Image from "next/image";
const Features = () => {
	return (
		<section className="pt-16 bg-[#F9F9F9]">
			<div className="container mx-auto px-4 text-center space-y-10">
				<div className="scroll-animate opacity-0 transition-all duration-700">
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

				<div className="max-h-[528px] h-full">
					<Image
						src={"/benefits-bg.png"}
						width={1040}
						height={514}
						alt=""
						className="absolute left-1/2 -translate-x-1/2 h-[514px] z-10"
					/>
					<FeaturesCarousel />
				</div>
			</div>
		</section>
	);
};

export default Features;
