import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export const metadata = {
  title: "Spot",
  description: "Book your next event with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-linear-to-br from-gray-950 via-zinc-900 to-stone-900 text-white">
        <ClerkProvider
          appearance={{
            theme: dark,
          }}
        >
          <ConvexClientProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {/* {"Headr"} */}
              <Header />
              <main className="relative min-h-screen container mx-auto pt-40 md:pt-32">
                <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                  <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl" />
                </div>
                <div className="relative z-10 min-h-[70vh]"> {children}</div>
                {/* {"Footer"} */}
                <footer>
                  <div className="border-t border-gray-800/50 py-8 px-6 mx-auto max-w-7xl">
                    <div className="text-sm text-gray-400">
                      © 2024 Spot. All rights reserved.
                    </div>
                  </div>
                </footer>
              </main>
            </ThemeProvider>
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
