const Footer = () =>{
    return (
        <footer className="w-full">
            <div className="max-w-7xl mx-auto px-3 py-6 sm:px-6 lg:px-8">
                <p className="text-center text-sm text-slate-700 sm:text-left">
                    &copy; {new Date().getFullYear()} RST Store. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;