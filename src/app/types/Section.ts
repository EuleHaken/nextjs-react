import {ReactNode} from "react";

type Section = {
	id: string; // for navigation
	title: string;
	content: ReactNode;
	level: number; // h1, h2, ...
	subsections?: Section[];
};

export default Section;
