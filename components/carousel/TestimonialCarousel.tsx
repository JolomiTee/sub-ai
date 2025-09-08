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
							<div className="md:p-1">
								<Card className="h-full md:max-h-[300px] p-0 overflow-hidden">
									<CardContent className="p-0 md:p-2 md:pe-5 md:max-h-[300px] bg-white ">
										<div className="flex flex-col sm:flex-row gap-[10px] md:gap-[32px] h-full md:max-h-[300px] p-2">
											{/* Profile Image */}
											<div className="relative  overflow-hidden flex-shrink-0 mx-auto md:mx-0">
												<Image
													src={
														testimonial.img || "/placeholder.svg"
													}
													alt={`${testimonial.name} profile`}
													height={284}
													width={235}
													className="object-cover"
												/>
											</div>

											{/* Content */}
											<div className="flex flex-shrink-0 flex-col md:pt-[40px] text-[12px] justify-between flex-1 p-1 sm:pt-[40px]">
												{/* Testimonial Text */}
												<div className="mb-4">
													<div className="text-[#171717] text-[20px] font-medium mb-2 sm:text-left">
														{testimonial.remark}
													</div>
													<p className="text-sm md:text-base lg:text-xl text-[#475367] leading-relaxed text-left ">
														{testimonial.text}
													</p>
												</div>

												{/* Author Info */}
												<div className="sm:pb-[40px] text-left md:text-left">
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
