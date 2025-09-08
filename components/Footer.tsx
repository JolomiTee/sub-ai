import dynamic from "next/dynamic";

const Clock = dynamic(() => import("./Clock"), { ssr: false });
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="h-[204px] flex flex-col items-center justify-center">
			<Image src={"/border-footer.svg"} alt="" width={1040} height={20} />
			<div className="container max-w-[1040px] mx-auto px-4 py-4 min-h-[108px] flex justify-center items-center">
				<div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
					<div className="flex items-center gap-2 group">
						<div className="flex items-center gap-2 group">
							<Image
								src="/logo.svg"
								width={30}
								height={30}
								alt="SubAI logo"
							/>
							<span className="font-bold text-[#1BB425] text-xl">
								sub-ai
							</span>
						</div>
						<span className="text-base text-muted-foreground">
							built with <span className="text-[#FF0000]">love ❤️ </span>
							and <span className="text-[#DAA700]">light 💡</span>
						</span>
					</div>
					<div className="text-[#475367]">2024</div>
					<Clock />
				</div>
			</div>
			<Image src={"/border-footer.svg"} alt="" width={1040} height={20} />
		</footer>
	);
};

export default Footer;
