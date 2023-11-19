"use client";

import {createContext, useContext} from "react";

type DropdownContextType = {
	activeName: string;
	setActiveName: (name: string) => void;
};

export const DropdownContext = createContext<DropdownContextType | null>(null);

export function useDropdownContext() {
	const context = useContext(DropdownContext);
	if (!context) {
		throw new Error(
			"useDropdownContext must be used within a DropdownProvider"
		);
	}
	return context;
}
