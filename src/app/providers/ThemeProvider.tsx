"use client";

import {ReactNode} from "react";
import {ThemeProvider as NextThemeProvider} from "next-themes";

export const ThemeProvider = ({children}: { children: ReactNode }) => (
	<NextThemeProvider
		attribute="data-theme"
		defaultTheme="dark"
		storageKey={"theme_mode"}
		enableSystem={false}
	>
		{children}
	</NextThemeProvider>
);
