import React from 'react'
import { Button } from './ui/button';

const CTA = () => {
  return (
		<section className="py-20 bg-[#1BB425] text-[#1BB425]-foreground overflow-hidden relative">
			<div className="absolute inset-0 bg-[url('/3d-colorful-blocks-pattern.png')] opacity-20"></div>
			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-2xl scroll-animate opacity-0 translate-y-8 transition-all duration-700">
					<h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-6 text-balance">
						We enjoy building random stuffs, for random use
					</h2>
					<p className=" text-xl mb-8 opacity-90">
						If you want to build something together, or just want to say
						hi, we'd love to hear from you.
					</p>
					<div className="flex flex-col sm:flex-row gap-4">
						<Button
							size="lg"
							variant="secondary"
							className=" text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
						>
							Right, message us
						</Button>
						<Button
							size="lg"
							variant="outline"
							className=" text-lg px-8 py-6 border-[#1BB425]-foreground/20 text-[#1BB425]-foreground hover:bg-[#1BB425]-foreground/10 bg-transparent transition-all duration-300 hover:scale-105"
						>
							Get in touch
						</Button>
					</div>
				</div>
			</div>
			<div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-30">
				<div className="w-full h-full bg-gradient-to-br from-accent/30 to-secondary/30 rounded-full animate-float animate-pulse"></div>
			</div>
		</section>
  );
}

export default CTA