"use client";

import { Clock4 } from "lucide-react";
import { useEffect, useState } from "react";

export default function Clock() {
	const [time, setTime] = useState("");

	useEffect(() => {
		const updateTime = () => {
			setTime(
				new Date().toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
					hour12: true, // ensures AM/PM
				})
			);
		};

		updateTime(); // run immediately
		const interval = setInterval(updateTime, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="text-[#FF5B1B] flex items-center justify-center gap-2 uppercase">
			<Clock4 size={20} />
			{time}
		</div>
	);
}
