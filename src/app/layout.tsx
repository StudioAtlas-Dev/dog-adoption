import './globals.css';
import localFont from 'next/font/local';
import { Metadata } from 'next';

const Roboto = localFont({
  src: '../../public/fonts/Roboto-VariableFont.ttf',
  variable: '--roboto',
  display: 'swap', // Automatically handles fallback fonts
});

const PoppinsBold = localFont({
  src: '../../public/fonts/Poppins-Bold.ttf',
  variable: '--poppins-bold',
  display: 'swap',
});

const PoppinsSemiBold = localFont({
  src: '../../public/fonts/Poppins-SemiBold.ttf',
  variable: '--poppins-semibold',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dog Rescue',
  description: 'Animal Rescue and Rehabilitation Center',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${Roboto.variable} ${PoppinsBold.variable} ${PoppinsSemiBold.variable}`}>{children}</body>
    </html>
  );
}