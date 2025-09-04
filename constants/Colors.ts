/**
 * Below are the colors that are used in the app.
 *
 * We've defined a theme for both light and dark modes.
 * - `primary`: The main brand color, used for active elements.
 * - `inactive`: A muted color for inactive elements.
 * - `background`: The primary background color for components like tab bars.
 * - `text`: The default text color.
 * - `card`: The background color for card-like components.
 *
 * You can add more colors to this file as needed.
 */

const brand = {
	primary: "#C7A581",
	inactive: "#707070",
	background: "#F5EFE6",
};

export const Colors = {
	light: {
		text: "#11181C",
		background: "#fff",
		tint: brand.primary,
		icon: "#687076",
		tabIconDefault: brand.inactive,
		tabIconSelected: brand.primary,
		tabBar: brand.background,
	},
	dark: {
		text: "#ECEDEE",
		background: "#151718",
		tint: brand.primary,
		icon: "#9BA1A6",
		tabIconDefault: brand.inactive,
		tabIconSelected: brand.primary,
		tabBar: "#1C1C1E", // A dark background for the tab bar in dark mode
	},
};
