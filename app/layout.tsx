import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"

const geistSans = GeistSans
const geistMono = GeistMono
export const metadata: Metadata = {
  title: "Webify - Online Code Editor",
  description:
    "A lightweight browser-based IDE for HTML, CSS, and JavaScript with live preview. Write code and see results instantly.",
  keywords: [
    "code editor",
    "online IDE",
    "HTML editor",
    "CSS editor",
    "JavaScript editor",
    "live preview",
    "web development",
  ],
  openGraph: {
    title: "Webify - Online Code Editor",
    description:
      "Write HTML, CSS and JavaScript with instant live preview in your browser. No setup required.",
    url: "https://webify-five.vercel.app",
    siteName: "Webify",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webify - Online Code Editor",
    description:
      "Write HTML, CSS and JavaScript with instant live preview in your browser.",
  },
};

const suppressBenignErrorEvents = `(function(){
  window.addEventListener('error',function(e){
    if(e&&!(e.error instanceof Error)){
      e.stopImmediatePropagation();
      e.preventDefault();
      console.warn('[suppressed non-Error event]',e.message||e);
    }
  },true);
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{ __html: suppressBenignErrorEvents }}
        />
        {children}
         <Toaster /> 
      </body>
    </html>
  );
}