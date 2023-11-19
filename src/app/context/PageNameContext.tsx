"use client";

import {createContext, useContext} from "react";

type PageNameContextType = {
	pageName: string;
	setPageName: (name: string) => void;
};

export const PageNameContext = createContext<PageNameContextType | null>(null);

export function usePageNameContext() {
	const context = useContext(PageNameContext);
	if (!context) {
		throw new Error(
			"usePageNameContext must be used within a PageNameProvider"
		);
	}
	return context;
}
