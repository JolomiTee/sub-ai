import Image from "next/image";
import { Button } from "./ui/button";

const CTA = () => {
	return (
		<section className="h-[80vh] flex justify-center items-center">
			<div className="py-[50px] max-w-[1040px] w-full rounded-[24px] bg-[#1BB425] overflow-hidden relative px-[62px]">
				<div className="max-w-2xl scroll-animate transition-all duration-700">
					<h2 className="text-[#171717] font-medium text-4xl mb-6 text-balance">
						We enjoy building random stuffs, for random use
					</h2>
					<p className=" text-16 text-[#171717] mb-8 max-w-[485px]">
						Sub AI is just one of the many random things we’ve built. If
						you’ve got feedback or thoughts, we’d love to hear from you.
					</p>

					<div className="flex gap-6">
						<input
							className="w-[328px] h-[48px] bg-[#171717]/20 rounded-full border-[#008509] px-4 placeholder:text-white/80"
							placeholder="Send us a message"
						/>
						<Button className="text-[#1BB425] bg-[#171717] h-[48px] rounded-full">
							Send Message
						</Button>
					</div>
				</div>
				<Image
					src={"/cubes-bg.png"}
					alt=""
					width={300}
					height={300}
					unoptimized
					className="w-[480px] h-auto z-10 absolute bottom-0 right-0"
				/>
			</div>
		</section>
	);
};

export default CTA;
