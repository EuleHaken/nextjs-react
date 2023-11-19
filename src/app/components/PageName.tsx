"use client";

import {ReactNode, useEffect} from "react";
import {usePageNameContext} from "../context/PageNameContext";

type Props = {
	children: ReactNode;
	name: string;
};

export default function PageName({ children, name }: Props) {
	const { setPageName } = usePageNameContext();

	useEffect(() => {
		setPageName(name);

		// Cleanup - reset the page name when the component unmounts
		return () => {
			setPageName("");
		};
	}, [name, setPageName]);

	return <>{children}</>;
}
