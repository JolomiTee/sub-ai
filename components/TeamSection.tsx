import React from 'react'
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const TeamSection = () => {
  return (
		<section className="py-20 bg-background">
			<div className="container mx-auto px-4 text-center">
				<div className="scroll-animate opacity-0 translate-y-8 transition-all duration-700">
					<Badge variant="secondary" className="mb-6 ">
						The team
					</Badge>
					<h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-6 text-balance">
						Meet the builders
					</h2>
					<p className=" text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
						We're passionate about making cooking accessible and fun. Sub
						AI — a working product. Meet the guys who cooked it up.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					<Card className="overflow-hidden scroll-animate opacity-0 translate-y-8 transition-all duration-700 hover:shadow-xl hover:scale-105 group">
						<div className="h-32 bg-gradient-to-br from-pink-400 to-orange-400 transition-all duration-500 group-hover:from-pink-500 group-hover:to-orange-500"></div>
						<CardContent className="p-6 text-left">
							<div className="flex items-start gap-4 mb-4">
								<Avatar className="w-16 h-16 border-4 border-background -mt-8 transition-all duration-300 group-hover:scale-110">
									<AvatarImage src="/tech-founder-headshot.png" />
									<AvatarFallback>QS</AvatarFallback>
								</Avatar>
								<div className="mt-2">
									<h3 className="font-space-grotesk font-bold text-xl">
										Quake Silver
									</h3>
									<p className=" text-muted-foreground">Co-founder</p>
								</div>
							</div>
							<p className=" text-sm text-muted-foreground mb-4">
								I specialize in creating user-friendly designs that make
								products easier and more enjoyable to use. I'm
								passionate about understanding user needs.
							</p>
							<div className="flex gap-2">
								<Button
									size="sm"
									variant="outline"
									className="w-8 h-8 p-0 bg-transparent transition-all duration-300 hover:scale-110 hover:bg-[#1BB425] hover:text-[#1BB425]-foreground"
								>
									<span className="sr-only">Twitter</span>𝕏
								</Button>
								<Button
									size="sm"
									variant="outline"
									className="w-8 h-8 p-0 bg-transparent transition-all duration-300 hover:scale-110 hover:bg-[#1BB425] hover:text-[#1BB425]-foreground"
								>
									<span className="sr-only">LinkedIn</span>
									in
								</Button>
								<Button
									size="sm"
									variant="outline"
									className="w-8 h-8 p-0 bg-transparent transition-all duration-300 hover:scale-110 hover:bg-[#1BB425] hover:text-[#1BB425]-foreground"
								>
									<span className="sr-only">GitHub</span>
									gh
								</Button>
							</div>
						</CardContent>
					</Card>

					<Card
						className="overflow-hidden scroll-animate opacity-0 translate-y-8 transition-all duration-700 hover:shadow-xl hover:scale-105 group"
						style={{ transitionDelay: "200ms" }}
					>
						<div className="h-32 bg-gradient-to-br from-purple-400 to-blue-400 transition-all duration-500 group-hover:from-purple-500 group-hover:to-blue-500"></div>
						<CardContent className="p-6 text-left">
							<div className="flex items-start gap-4 mb-4">
								<Avatar className="w-16 h-16 border-4 border-background -mt-8 transition-all duration-300 group-hover:scale-110">
									<AvatarImage src="/tech-developer-headshot.png" />
									<AvatarFallback>FG</AvatarFallback>
								</Avatar>
								<div className="mt-2">
									<h3 className="font-space-grotesk font-bold text-xl">
										Fortunate
									</h3>
									<p className=" text-muted-foreground">Co-founder</p>
								</div>
							</div>
							<p className=" text-sm text-muted-foreground mb-4">
								AI developer who enjoys all things about perfect design
								to life. With a keen eye for detail and a love for
								clean, functional designs.
							</p>
							<div className="flex gap-2">
								<Button
									size="sm"
									variant="outline"
									className="w-8 h-8 p-0 bg-transparent transition-all duration-300 hover:scale-110 hover:bg-[#1BB425] hover:text-[#1BB425]-foreground"
								>
									<span className="sr-only">Twitter</span>𝕏
								</Button>
								<Button
									size="sm"
									variant="outline"
									className="w-8 h-8 p-0 bg-transparent transition-all duration-300 hover:scale-110 hover:bg-[#1BB425] hover:text-[#1BB425]-foreground"
								>
									<span className="sr-only">LinkedIn</span>
									in
								</Button>
								<Button
									size="sm"
									variant="outline"
									className="w-8 h-8 p-0 bg-transparent transition-all duration-300 hover:scale-110 hover:bg-[#1BB425] hover:text-[#1BB425]-foreground"
								>
									<span className="sr-only">GitHub</span>
									gh
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
  );
}

export default TeamSection