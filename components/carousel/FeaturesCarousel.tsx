import { benefits } from "@/data";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

const FeaturesCarousel = () => {
	return (
		<Carousel
			opts={{
				align: "center",
				loop: true,
			}}
			plugins={[
				AutoScroll({
					speed: 1,
				}),
			]}
			orientation="vertical"
			className="w-full max-w-lg mx-auto transition-all duration-700 scroll-animate opacity-0 z-20 max-h-[370px] md:max-h-[528px] h-full"
		>
			<CarouselContent className="h-[385px] md:h-[528px] pt-10">
				{benefits.map((item, index) => (
					<CarouselItem key={index} className="basis-1 md:basis-1/2">
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
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
};

export default FeaturesCarousel;
