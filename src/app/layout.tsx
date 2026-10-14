
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/footer";
import Topbar from "@/components/Topbar/Topbar";
import { Poppins } from "next/font/google";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "DIAC",
  description: "Dynamic Institute of Automation & Controls",
  icons:{
    icon: '/diacred.png'
  },
openGraph: {
    title: "DIAC- Industrial Automation Experts",
    description: "Your trusted partner for automation and training solutions.",
    url: "https://diac.co.in",
    siteName: "DIAC",
    images: [
      {
        url: "https://diac.co.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DIAC",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  {/* HEAD SECTION */}
    <head>
      {/<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MFSFWPR');</script>
<!-- End Google Tag Manager -->/}
    </head>

      
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${playfair.variable} antialiased`}
      >
          {/<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MFSFWPR"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->/}

        
        <Topbar />
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
