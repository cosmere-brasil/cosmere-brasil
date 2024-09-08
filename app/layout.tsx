import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const openRunde = localFont({
    src: "./fonts/open-runde.woff2",
    variable: "--font-openRunde",
    weight: "100 900"
});

export const metadata: Metadata = {
    title: "Cosmere Brasil",
    description: "A enciclopédia brasileira das obras de Brandon Sanderson",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body
                className={`${openRunde.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
