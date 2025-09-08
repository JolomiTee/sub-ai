import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { TestimonialsCarousel } from "./carousel/TestimonialCarousel";
const Testimonial = () => {
	return (
		<section className="py-20 bg-[#F9F9F9]">
			<div className="text-center space-y-[80px]">
				<div className="container mx-auto px-4 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
					<Badge className="mb-6 text-[#1BB425] border-4 border-[#072206]/10 text-sm animate-bounce-subtle rounded-full p-1 flex justify-center item-center mx-auto px-2 bg-white">
						Testimonials
					</Badge>
					<h2 className="font-medium text-4xl md:text-5xl mb-16 text-balance text-[#072206]  tracking-[-1.2px]">
						Still unsure? These cooks
						<br className="hidden md:inline" /> were too, until they tried
						it.
					</h2>
				</div>

				<div className="relative">
					<Image
						src={"/testimonials-bg.svg"}
						width={1040}
						height={514}
						alt=""
						className="absolute left-1/2 -translate-x-1/2 h-[514px] -top-20 z-10"
					/>
					<TestimonialsCarousel />
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
