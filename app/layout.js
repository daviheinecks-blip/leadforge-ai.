
import "./globals.css";

export const metadata = {
  title: "LeadForge AI",
  description: "Intelligent Website Builder"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
