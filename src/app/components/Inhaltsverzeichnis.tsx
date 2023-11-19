"use client";

import {ReactNode, useEffect} from "react";
import Section from "../types/Section";
import {useInhaltsverzeichnisContext} from "../context/InhaltsverzeichnisContext";

type Props = {
	children: ReactNode;
	sections: Section[];
};

export default function Inhaltsverzeichnis({ children, sections }: Props) {
	const { setSections } = useInhaltsverzeichnisContext();

	useEffect(() => {
		setSections(sections);

		// Cleanup - reset the page name when the component unmounts
		return () => {
			setSections([]);
		};
	}, [sections, setSections]);

	return <>{children}</>;
}
