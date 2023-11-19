"use client";

import {useState} from "react";
import {InhaltsverzeichnisContext} from "../context/InhaltsverzeichnisContext";
import Section from "../types/Section";

export function InhaltsverzeichnisProvider({children}) {
	const [sections, setSections] = useState<Section[]>([]);

	return (
		<InhaltsverzeichnisContext.Provider value={{sections, setSections}}>
			{children}
		</InhaltsverzeichnisContext.Provider>
	);
}
