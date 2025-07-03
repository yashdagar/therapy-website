const Footer = () => {
  return (
     <footer className="bg-[#f3f0e8] text-[#41413f] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-6">
                <h3>Dr. Serena Blake, PsyD</h3>
                <div className="space-y-2">
                    <p>Phone: (323) 555-0192</p>
                    <p>serena@blakepsychology.com</p>
                    <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>
                </div>
                <div className="space-y-2">
                    <p className="text-2xl font-freight">Office Hours</p>
                    <p>In-person: Tue & Thu, 10 AM-6 PM</p>
                    <p>Virtual via Zoom: Mon, Wed & Fri, 1 PM-5 PM</p>
                </div>
            </div>
            <div className="border-t border-[#41413f]/20 mt-8 pt-8">
                <p>&copy; 2025 Dr. Serena Blake. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer