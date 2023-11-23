"use client";

import {ReactNode} from "react";
import {ThemeProvider as NextThemeProvider} from "next-themes";

type Props = {
	children: ReactNode;
}

export const ThemeProvider = ({children}:  Props) => (
	<NextThemeProvider
		attribute="data-theme"
		defaultTheme="dark"
		storageKey={"theme_mode"}
		enableSystem={false}
	>
		{children}
	</NextThemeProvider>
);
