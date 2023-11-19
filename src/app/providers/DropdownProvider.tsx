"use client";

import {useState} from "react";
import {DropdownContext} from "../context/DropdownContext";

export function DropdownProvider({children}) {
	const [activeName, setActiveName] = useState<string>("");

	return (
		<DropdownContext.Provider value={{activeName, setActiveName}}>
			{children}
		</DropdownContext.Provider>
	);
}
