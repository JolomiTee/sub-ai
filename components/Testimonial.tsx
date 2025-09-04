import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
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
						<br />
						were too, until they tried it.
					</h2>
				</div>

				<TestimonialsCarousel />
			</div>
		</section>
	);
};

export default Testimonial;

export function TestimonialsCarousel() {
	const testimonials = [
		{
			img: "/testimonials/user1.png",
			remark: "Awesome!",
			text: "I ran out of eggs while baking and thought I’d have to stop, then I found Sub AI. It gave me quick alternatives, and my cake still turned out perfect!",
			name: "Amanda Smiths",
			company: "Cakes & Pastries",
		},
		{
			img: "/testimonials/user2.png",
			remark: "So Handy",
			text: "I love that Sub AI understands dietary needs. It helped me find plant-based substitutes without compromising flavor. Total game changer!",
			name: "Seun Taylor",
			company: "CEO Tastybites",
		},
		{
			img: "/testimonials/user3.png",
			remark: "So good!",
			text: "Living on a student budget means I don’t always have every ingredient. Sub AI has saved so many of my meals, it’s now my go-to cooking hack.",
			name: "Seun Taylor",
			company: "University Student",
		},
		{
			img: "/testimonials/user4.png",
			remark: "Such a Lifesaver!",
			text: "Dinner time with kids is chaos. Sub AI helped me swap out missing ingredients without stress. It's like having a chef in my pocket.",
			name: "Jonathan Meyers",
			company: "Super Dad",
		},
		{
			img: "/testimonials/user5.png",
			remark: "Confidence Booster!",
			text: "I’m new to cooking, and Sub AI makes me feel like I actually know what I’m doing. It’s saved me from giving up on so many recipes.",
			name: "Zara",
			company: "Beginner cook",
		},
	];
	return (
		<div className="w-full py-6">
			<Carousel
				opts={{
					align: "center",
					loop: true,
					skipSnaps: false,
					dragFree: false,
				}}
				className="w-full"
			>
				<CarouselContent className="-ml-2 md:-ml-4">
					{testimonials.map((testimonial, index) => (
						<CarouselItem
							key={index}
							className="pl-2 md:pl-4 basis-4/5 md:basis-3/5 lg:basis-3/5"
						>
							<div className="p-1">
								<Card className="h-full max-h-[300px] p-0 overflow-hidden">
									<CardContent className="p-2 max-h-[300px] bg-white ">
										<div className="flex flex-col md:flex-row gap-[32px] h-full max-h-[300px]">
											{/* Profile Image */}
											<div className="flex-shrink-0 mx-auto md:mx-0">
												<div className="relative h-[284px] w-[235px] overflow-hidden">
													<Image
														src={
															testimonial.img ||
															"/placeholder.svg"
														}
														alt={`${testimonial.name} profile`}
														fill
														className="object-cover"
													/>
												</div>
											</div>

											{/* Content */}
											<div className="flex flex-col pt-[40px] text-[12px] justify-between flex-1 text-center md:text-left">
												{/* Testimonial Text */}
												<div className="mb-4">
													<div className="text-[#171717] text-[20px] font-medium mb-2">
														{testimonial.remark}
													</div>
													<p className="text-sm md:text-base lg:text-xl text-[#475367] leading-relaxed">
														{testimonial.text}
													</p>
												</div>

												{/* Author Info */}
												<div className="pb-[40px]">
													<div className="font-semibold text-[#667185] text-base md:text-[14px]">
														{testimonial.name}
													</div>
													<div className="text-sm text-[#667185]">
														{testimonial.company}
													</div>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<div className="absolute right-20 translate-y-10">
					<CarouselNext className="" />
					<CarouselPrevious className="" />
				</div>
			</Carousel>
		</div>
	);
}
