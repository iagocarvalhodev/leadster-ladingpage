import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Header } from './components/Header/Header'

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
      <body className={Jakarta.className}>
        <>
          <Header />
          {children}
        </>
      </body>
    </html>
  )
}
