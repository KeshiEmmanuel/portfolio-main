const Navbar = () => {
    return (
        <nav>
            <div className="pt-5 flex items-center justify-between">
                <div>
                    <img
                        src="/main-logo.svg"
                        alt="mainlogo"
                        className="w-10 h-10"
                    />
                </div>
                <div className="flex items-center gap-5 primary-font">
                    <ul className="flex items-center gap-2">
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Work</a>
                        </li>
                    </ul>
                    <button className="bg-white/85 text-black py-2 font-semibold rounded-md px-5 backdrop-blur-2xl">
                        Contact me
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
