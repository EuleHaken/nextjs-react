"use client";

import {ReactNode, useState} from "react";
import {PageNameContext} from "../context/PageNameContext";

type Props = {
	children: ReactNode;
}

export function PageNameProvider({children}: Props) {
	const [pageName, setPageName] = useState<string>("");

	return (
		<PageNameContext.Provider value={{pageName, setPageName}}>
			{children}
		</PageNameContext.Provider>
	);
}
