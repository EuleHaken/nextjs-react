"use client";

import {createContext, useContext} from "react";
import Section from "../types/Section";

type InhaltsverzeichnisContextType = {
	sections: Section[];
	setSections: (sections: Section[]) => void;
};

export const InhaltsverzeichnisContext = createContext<InhaltsverzeichnisContextType | null>(null);

export function useInhaltsverzeichnisContext() {
	const context = useContext(InhaltsverzeichnisContext);
	if (!context) {
		throw new Error(
			"useInhaltsverzeichnisContext must be used within a DropdownProvider"
		);
	}
	return context;
}
