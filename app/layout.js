export const metadata = {
    title: "MVP Mockup",
    description: "Mockup data input + dashboard",
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}