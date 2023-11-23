"use client";

import {ReactNode, useState} from "react";
import {InhaltsverzeichnisContext} from "../context/InhaltsverzeichnisContext";
import Section from "../types/Section";

type Props = {
	children: ReactNode;
}

export function InhaltsverzeichnisProvider({children}: Props) {
	const [sections, setSections] = useState<Section[]>([]);

	return (
		<InhaltsverzeichnisContext.Provider value={{sections, setSections}}>
			{children}
		</InhaltsverzeichnisContext.Provider>
	);
}
