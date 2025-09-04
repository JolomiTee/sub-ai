import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';

const Header = () => {
  return (
		<header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 transition-all duration-300 hover:bg-background/98">
			<div className="container w-[80%] mx-auto px-4 h-16 flex items-center justify-between">
				<div className="flex items-center gap-2 group">
					<Image src="/logo.svg" width={30} height={30} alt="SubAI logo" />
					<span className="font-space-grotesk font-bold text-xl">
						Sub AI
					</span>
				</div>
				<div className="flex items-center gap-4">
					<Button
						variant="ghost"
						className=" transition-all duration-300 hover:scale-105"
					>
						Login
					</Button>
					<Button className=" bg-[#1BB425] hover:bg-[#1BB425]/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
						Try Free
					</Button>
				</div>
			</div>
		</header>
  );
}

export default Header