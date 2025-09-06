// components/Clock.tsx
"use client";

import { Clock4 } from "lucide-react";
import { useEffect, useState } from "react";

export default function Clock() {
	const [time, setTime] = useState("");

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date().toLocaleTimeString());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return <div className="text-[#FF5B1B] flex items-center justify-center gap-2"><Clock4 size={20} />{time}</div>;
}
