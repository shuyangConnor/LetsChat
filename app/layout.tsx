import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/providers/theme-provider'
import './globals.css'
import { cn } from '@/lib/utils'
import { ModalProvider } from '@/components/providers/modal-provider'
import { SocketProvider } from '@/components/providers/socket-provider'
import { QueryProvider } from '@/components/providers/query-provider'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Let's Chat!!!",
  description: 'Generated by create next app',
  other: {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1.0, user-scalable=no',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <link
          rel="icon"
          href="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-round-black-icon.png"
          sizes="any"
        />
        <body className={cn(font.className, 'bg-white dark:bg-[#313338]')}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="discord-theme">
            <SocketProvider>
              <ModalProvider></ModalProvider>
              <QueryProvider>{children}</QueryProvider>
            </SocketProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
