"use client";

import {useState} from "react";
import {PageNameContext} from "../context/PageNameContext";

export function PageNameProvider({children}) {
	const [pageName, setPageName] = useState<string>("");

	return (
		<PageNameContext.Provider value={{pageName, setPageName}}>
			{children}
		</PageNameContext.Provider>
	);
}
