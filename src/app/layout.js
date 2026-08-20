import Navbar from "../components/NAvbar";
import "./globals.css";
import Container from "@/components/Continer";
export const metadata = {
  title: "My Portfolio",
  description: "Responsive modern navigation layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body className="h-screen overflow-hidden min-h-screen bg-slate-100 text-slate-900 antialiased">
        <div className="min-h-screen">
          <Navbar />
          <Container>
            <main className=" pt-16 h-screen overflow-y-auto  mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
              {children}
            </main>
          </Container>
        </div>
      </body>
    </html>
  );
}
