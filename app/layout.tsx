import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://edusires.com"),
  title: {
    default: "EDUSIRES | Education, Office Solutions & Ayurvedic Products",
    template: "%s | EDUSIRES",
  },
  description:
    "Empowering students through quality education, supporting businesses with office solutions, and promoting wellness through authentic Ayurvedic products. Founded by H.K. Verma in Madhepura, Bihar.",
  keywords:
    "education, JEE, NEET, office appliances, ayurvedic products, Bihar, Madhepura, H.K. Verma",
  openGraph: {
    title: "EDUSIRES",
    description:
      "Quality education, office solutions, and authentic Ayurvedic products from EDUSIRES.",
    url: "https://edusires.com",
    siteName: "EDUSIRES",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDUSIRES",
    description:
      "Empowering students, businesses, and wellness journeys through trusted services.",
  },
  alternates: {
    canonical: "/",
  },
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.className} ${spaceGrotesk.variable} overflow-x-hidden antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var accent = localStorage.getItem('edusires-accent') === 'green' ? 'green' : 'blue';
                  var themeMode = localStorage.getItem('edusires-theme');
                  if (themeMode !== 'light' && themeMode !== 'dark' && themeMode !== 'system') themeMode = 'system';
                  var resolvedTheme = themeMode === 'system'
                    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
                    : themeMode;
                  var root = document.documentElement;
                  var isDark = resolvedTheme === 'dark';
                  var tokens = {
                    blue: {
                      light: {
                        '--background': '210 50% 98%',
                        '--card': '210 45% 99%',
                        '--muted': '210 42% 95%',
                        '--border': '210 28% 88%',
                        '--input': '210 28% 90%',
                        '--primary': '208 70% 40%',
                        '--accent': '208 70% 40%',
                        '--ring': '208 70% 40%',
                        '--secondary': '208 65% 92%',
                        '--secondary-foreground': '208 70% 22%',
                        '--color-accent': 'var(--color-blue-600)',
                        '--color-accent-light': 'var(--color-blue-50)',
                        '--color-success': 'var(--color-blue-600)',
                        '--color-info': 'var(--color-blue-600)'
                      },
                      dark: {
                        '--background': '216 30% 10%',
                        '--card': '216 26% 13%',
                        '--muted': '216 20% 19%',
                        '--border': '216 20% 22%',
                        '--input': '216 20% 17%',
                        '--primary': '208 64% 53%',
                        '--accent': '208 64% 53%',
                        '--ring': '208 64% 53%',
                        '--secondary': '208 35% 24%',
                        '--secondary-foreground': '208 80% 90%',
                        '--color-accent': 'var(--color-blue-300)',
                        '--color-accent-light': 'var(--color-blue-200)',
                        '--color-success': 'var(--color-blue-300)',
                        '--color-info': 'var(--color-blue-300)'
                      }
                    },
                    green: {
                      light: {
                        '--background': '130 28% 98%',
                        '--card': '130 24% 99%',
                        '--muted': '130 26% 95%',
                        '--border': '130 20% 87%',
                        '--input': '130 20% 89%',
                        '--primary': '130 50% 46%',
                        '--accent': '130 50% 46%',
                        '--ring': '130 50% 46%',
                        '--secondary': '130 45% 90%',
                        '--secondary-foreground': '130 60% 22%',
                        '--color-accent': 'var(--color-green-600)',
                        '--color-accent-light': 'var(--color-green-50)',
                        '--color-success': 'var(--color-green-600)',
                        '--color-info': 'var(--color-green-600)'
                      },
                      dark: {
                        '--background': '140 22% 10%',
                        '--card': '140 18% 13%',
                        '--muted': '140 16% 19%',
                        '--border': '140 14% 22%',
                        '--input': '140 14% 17%',
                        '--primary': '130 45% 53%',
                        '--accent': '130 45% 53%',
                        '--ring': '130 45% 53%',
                        '--secondary': '130 30% 24%',
                        '--secondary-foreground': '130 65% 90%',
                        '--color-accent': 'var(--color-green-500)',
                        '--color-accent-light': 'var(--color-green-200)',
                        '--color-success': 'var(--color-green-500)',
                        '--color-info': 'var(--color-green-500)'
                      }
                    }
                  };

                  root.dataset.accent = accent;
                  root.dataset.themeMode = themeMode;
                  root.classList.toggle('dark', isDark);

                  var activeTokens = tokens[accent][resolvedTheme];
                  Object.keys(activeTokens).forEach(function(key) {
                    root.style.setProperty(key, activeTokens[key]);
                  });
                } catch (e) {}
              })()
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
