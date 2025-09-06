import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { testimonials } from "@/data";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
export function TestimonialsCarousel() {
	return (
		<div className="w-full py-5">
			<Carousel
				opts={{
					align: "center",
					loop: true,
					skipSnaps: false,
					dragFree: false,
				}}
				plugins={[
					Autoplay({
						delay: 6000,
					}),
				]}
				className="w-full z-20"
			>
				<CarouselContent className="-ml-2 md:-ml-4">
					{testimonials.map((testimonial, index) => (
						<CarouselItem
							key={index}
							className=" basis-4/5 md:basis-3/5 lg:basis-3/5"
						>
							<div className="p-1">
								<Card className="h-full max-h-[300px] p-0 overflow-hidden">
									<CardContent className="p-2 pe-5 max-h-[300px] bg-white ">
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
			</Carousel>
		</div>
	);
}
