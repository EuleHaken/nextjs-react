"use client";

import {ReactNode, useState} from "react";
import {DropdownContext} from "../context/DropdownContext";

type Props = {
	children: ReactNode;
}

export function DropdownProvider({children}: Props) {
	const [activeName, setActiveName] = useState<string>("");

	return (
		<DropdownContext.Provider value={{activeName, setActiveName}}>
			{children}
		</DropdownContext.Provider>
	);
}
