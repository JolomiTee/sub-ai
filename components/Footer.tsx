import React from 'react'
import { Button } from './ui/button';
import { ChefHat } from 'lucide-react';

const Footer = () => {
  return (
		<footer className="py-12 bg-muted/30 border-t border-border">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center gap-4">
					<div className="flex items-center gap-2 group">
						<div className="w-6 h-6 bg-[#1BB425] rounded flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
							<ChefHat className="w-4 h-4 text-[#1BB425]-foreground" />
						</div>
						<span className="font-space-grotesk font-bold">Sub AI</span>
						<span className=" text-sm text-muted-foreground">
							built with ❤️ and 🍳
						</span>
					</div>
					<div className="flex items-center gap-6 text-sm text-muted-foreground ">
						<span>2024</span>
						<Button
							variant="ghost"
							size="sm"
							className="h-auto p-0 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
						>
							Privacy
						</Button>
						<Button
							variant="ghost"
							size="sm"
							className="h-auto p-0 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
						>
							Terms
						</Button>
					</div>
				</div>
			</div>
		</footer>
  );
}

export default Footer