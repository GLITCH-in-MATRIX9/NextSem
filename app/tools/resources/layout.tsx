import Navbar from "@/app/components/navigation/Navbar"
import Footer from "@/app/components/navigation/Footer"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16"> 
        {children}
      </main>
      <Footer />
    </div>
  )
}