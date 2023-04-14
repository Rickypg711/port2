import './globals.css'

export const metadata = {
  title: 'Ricardo  Portfolio',
  description: 'Created By Ricardo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={` bg-slate-800 text-violet-200  overflow-auto min-h-screen m-0`}>{children}</body>
    </html>
  )
}
