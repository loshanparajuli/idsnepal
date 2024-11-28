import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-white text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 text-primary">IDS Media</h3>
            <p>सूचना विभाग दर्ता नं: (Processing)</p>
            <p>Chairman and Editor-in-Chief: Sudip Bhai Subedi</p>
            <p>Phone: +977 9860934654</p>
            <p>Email: business.idsnp@gmail.com</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center items-center">
            <Link href="https://idsmedia.com" className="relative w-32 h-32">
              <Image
                src="https://www.idsmedia.com.np/_next/static/media/logo.8d6c7db8.svg"
                alt="IDS Media Logo"
                fill
                sizes="128px"
                className="footer-gradient-bg rounded-full"
              />
            </Link>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-end">
            <h3 className="text-lg font-semibold mb-2 text-primary">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary hover:text-accent transition-colors">Facebook</Link>
              <Link href="#" className="text-primary hover:text-accent transition-colors">Twitter</Link>
              <Link href="#" className="text-primary hover:text-accent transition-colors">Instagram</Link>
        
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary text-primary-foreground text-center py-2">
        <p>&copy; 2024 IDS Media Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  )
}

