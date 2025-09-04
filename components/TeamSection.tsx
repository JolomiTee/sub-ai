import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const TeamSection = () => {
	const boys = [
		{
			bg: "/quake-bg.png",
			pic: "/quake.png",
			fb: "QS",
			name: "Quake Silver",
			text: "I specialize in creating user-friendly designs that make products easier and more enjoyable to use. By understanding users' needs, I design solutions that fit naturally into their daily lives.",
			email: "ogunyasilver@gmail.com",
			socials: [
				{
					platform: "twitter",
					link: "",
					hoverText: "",
				},
				{
					platform: "dribble",
					link: "",
					hoverText: "",
				},
				{
					platform: "website",
					link: "",
					hoverText: "",
				},
				{
					platform: "linkedin",
					link: "",
					hoverText: "",
				},
			],
		},
		{
			bg: "/fortunate-bg.png",
			pic: "/fortunate.png",
			name: "Fortunate",
			fb: "F",
			text: "A developer who excels at bringing pixel perfect design to life. With a keen eye for detail and clean code, I ensure every interface looks flawless and works seamlessly across devices.",
			email: "ogunyafortunate@gmail.com",
			socials: [
				{
					platform: "twitter",
					link: "",
					hoverText: "",
				},
				{
					platform: "website",
					link: "",
					hoverText: "",
				},
				{
					platform: "linkedin",
					link: "",
					hoverText: "",
				},
			],
		},
	];
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
					<p className="max-w-[572px] text-xl text-[#475367] mb-16 mx-auto">
						We're passionate about making cooking accessible and fun. Sub
						AI — a working product. Meet the guys who cooked it up.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{boys.map((boy, index) => (
						<Card className="overflow-hidden bg-white scroll-animate opacity-0 translate-y-8 transition-all duration-700 hover:shadow-xl  group rounded-2xl p-0">
							<div
								className="h-32 bg-cover bg-center"
								style={{ backgroundImage: `url('${boy.bg}')` }}
							></div>
							<CardContent className="p-[32px] text-left bg-white">
								<Avatar className="w-16 h-16 -mt-22 transition-all duration-300 group-hover:scale-110">
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
									<Button className="bg-[#F6F6F6] border-[#EEEEEE] rounded-full w-[133px] h-[36px] text-sm text-[#667185]">
										Get in touch{" "}
										<Image
											src={"/get-in-touch.svg"}
											alt=""
											width={20}
											height={20}
										/>
									</Button>
									<div className="flex gap-2">
										{boy.socials.map((social, index) => (
											<Button
												size="sm"
												variant="outline"
												className="w-8 h-8 p-0 bg-[#F6F6F6] border-[#EEEEEE] transition-all duration-300 hover:scale-110 rounded-full"
											>
												<Image
													src={`/socials/${social.platform}.svg`}
													width={20}
													height={20}
													alt=""
												/>
												<span className="sr-only">Twitter</span>
											</Button>
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
