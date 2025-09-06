import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	allowedDevOrigins: ["https://2fce8dab6fa1.ngrok-free.app"],
	async redirects() {
		return [
			{
				source: "/",
				destination: "/home",
				permanent: false,
			},
		];
	},
};

export default nextConfig;
