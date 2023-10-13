import './globals.css'
import {Poppins} from 'next/font/google'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: 'Mercy Osei-Bimpong',
  description: 'Portfolio of Mercy Osei-Bimpong',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
