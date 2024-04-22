import { Dosis, Grenze, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/ui/footer";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] });
const grenze=Grenze({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable:"--font-grenze"
})
const dosis=Dosis({
  weight:'500',
  subsets:["latin"],
  display:"swap",
})

export const metadata = {
  title: "LiveShare.io",
  description: "Share code in the real time at ease",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("text-4xl " , dosis.className)}>
       <NextTopLoader 
       showSpinner={false}
       color="#AD60F0"
       />
        {children}
      <Footer />
      </body>
    </html>
  );
}
