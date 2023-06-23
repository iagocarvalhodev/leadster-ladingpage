import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'

const Jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'LeadSter',
  description: 'Teste de Desenvolvimento',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Jakarta.className}>{children}</body>
    </html>
  )
}
