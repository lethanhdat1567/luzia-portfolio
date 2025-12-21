function Navlist() {
    return (
        <div className="flex gap-16 lg:gap-24">
            <div className="flex flex-col gap-4">
                <a href="#" className="transition-colors hover:text-gray-400">
                    Home
                </a>
                <a href="#" className="transition-colors hover:text-gray-400">
                    Works
                </a>
                <a href="#" className="transition-colors hover:text-gray-400">
                    About
                </a>
                <a href="#" className="transition-colors hover:text-gray-400">
                    Contact
                </a>
            </div>
            <div className="flex flex-col gap-4">
                <a href="#" className="transition-colors hover:text-gray-400">
                    X (Twitter)
                </a>
                <a href="#" className="transition-colors hover:text-gray-400">
                    Youtube
                </a>
                <a href="#" className="transition-colors hover:text-gray-400">
                    Instagram
                </a>
                <a href="#" className="transition-colors hover:text-gray-400">
                    Contra
                </a>
            </div>
            <div className="flex flex-col gap-4">
                <a href="#" className="transition-colors hover:text-gray-400">
                    Framer Marketplace
                </a>
                <a href="#" className="transition-colors hover:text-gray-400">
                    Become Affiliate
                </a>
            </div>
        </div>
    );
}

export default Navlist;
