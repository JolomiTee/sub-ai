import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { boys } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
const TeamSection = () => {
	return (
		<section className="py-20 bg-hero">
			<div className="container mx-auto px-4 text-center">
				<div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700">
					<Badge className="mb-6 text-[#1BB425] border-4 border-[#072206]/10 text-sm animate-bounce-subtle rounded-full p-1 flex justify-center item-center mx-auto px-2 bg-white">
						The Boys
					</Badge>
					<h2 className="font-medium text-[#072206] tracking-[-1.2px] text-4xl md:text-5xl mb-6 text-balance">
						Meet the builders
					</h2>
					<p className="max-w-[570px] text-xl text-[#475367] mb-16 mx-auto">
						What started as a random project brief online turned into{" "}
						<br />
						<span>Sub AI</span> — a working product. Meet the guys who
						cooked it up
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{boys.map((boy, index) => (
						<Card
							key={index}
							className="overflow-hidden bg-white scroll-animate opacity-0 translate-y-8 transition-all duration-700 hover:shadow-xl w-ful rounded-2xl p-0"
						>
							<div
								className="h-32 bg-cover bg-center"
								style={{ backgroundImage: `url('${boy.bg}')` }}
							></div>
							<CardContent className="p-[32px] text-left bg-white">
								<Avatar className="size-[80px] -mt-22 transition-all duration-300">
									<AvatarImage src={boy.pic} />
									<AvatarFallback>{boy.fb}</AvatarFallback>
								</Avatar>
								<div className="mt-[24px]">
									<h3 className="font-medium text-[#171717] text-lg">
										{boy.name}
									</h3>
								</div>
								<p className=" text-base text-[#475367] mb-4">
									{boy.text}
								</p>

								<div className="flex justify-between">
									<Link
										href={`mailto:${boy.email}`}
										className="group bg-[#F6F6F6] flex justify-center items-center gap-2 border border-[#EEEEEE]
             hover:bg-[#1BB425] hover:text-white rounded-full h-[36px] text-sm text-[#667185]
             overflow-hidden px-2 w-fit "
									>
										{/* Container that transitions its width */}
										<div className="">
											<div className="group-hover:hidden flex justify-center items-center gap-2 w-full">
												Get in touch
												<Image
													src="/get-in-touch.svg"
													alt=""
													width={20}
													height={20}
												/>
											</div>
											<span className="hidden group-hover:inline whitespace-nowrap text-xs">
												{boy.email}
											</span>
										</div>
									</Link>
									<div className="flex gap-2">
										{boy.socials.map((social, index) => (
											<Tooltip key={index}>
												<TooltipTrigger asChild>
													<Link
														className="flex justify-center items-center w-8 h-8 p-0 bg-[#F6F6F6] border-[#EEEEEE] border-2 transition-all duration-300 hover:scale-110 rounded-full"
														href={social.link}
													>
														<Image
															src={`/socials/${social.platform}.svg`}
															width={15}
															height={15}
															alt=""
														/>
													</Link>
												</TooltipTrigger>
												<TooltipContent className="bg-[#474747]">
													<span>{social.hoverText}</span>
												</TooltipContent>
											</Tooltip>
										))}
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default TeamSection;
