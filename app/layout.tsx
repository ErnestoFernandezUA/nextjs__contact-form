import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';


const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500','700']
});

export const metadata: Metadata = {
  title: 'NextJS Contact Form',
  description: 'Test project',
  authors: [{ 
    name: 'Ernesto', 
    url: 'https://www.notion.so/efernandez/Ernesto-Fernandez-c5f9c67e8cdb4f9bbfe97fcf8f68dcc8' 
  }],
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />

        <main>
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
}
