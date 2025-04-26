import localFont from "next/font/local";

const gellix = localFont({
  variable: "--font-gellix",
  src: [
    // Thin
    { path: "./Gellix-Thin.otf", weight: "100", style: "normal" },
    { path: "./Gellix-ThinItalic.otf", weight: "100", style: "italic" },
    // Light
    { path: "./Gellix-Light.otf", weight: "300", style: "normal" },
    { path: "./Gellix-LightItalic.otf", weight: "300", style: "italic" },
    // Regular
    { path: "./Gellix-Regular.otf", weight: "400", style: "normal" },
    { path: "./Gellix-RegularItalic.otf", weight: "400", style: "italic" },
    // Medium
    { path: "./Gellix-Medium.otf", weight: "500", style: "normal" },
    { path: "./Gellix-MediumItalic.otf", weight: "500", style: "italic" },
    // SemiBold
    { path: "./Gellix-SemiBold.otf", weight: "600", style: "normal" },
    { path: "./Gellix-SemiBoldItalic.otf", weight: "600", style: "italic" },
    // Bold
    { path: "./Gellix-Bold.otf", weight: "700", style: "normal" },
    { path: "./Gellix-BoldItalic.otf", weight: "700", style: "italic" },
    // ExtraBold
    { path: "./Gellix-ExtraBold.otf", weight: "800", style: "normal" },
    { path: "./Gellix-ExtraBoldItalic.otf", weight: "800", style: "italic" },
    // Black
    { path: "./Gellix-Black.otf", weight: "900", style: "normal" },
    { path: "./Gellix-BlackItalic.otf", weight: "900", style: "italic" },
  ],
});

export default gellix;
