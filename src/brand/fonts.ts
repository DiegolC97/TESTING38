import { Inter } from "next/font/google";

/**
 * Brand typeface. Swap the import and loader to change the font everywhere;
 * theme.css reads it through the `--font-brand-sans` CSS variable.
 */
export const brandSans = Inter({
  subsets: ["latin"],
  variable: "--font-brand-sans",
  display: "swap",
});
