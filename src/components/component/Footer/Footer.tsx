const Footer = () => {
  return (
    <footer className="flex flex-col justify-around gap-5 bg-gray-300 py-8 dark:bg-gray-500 dark:text-white mt-14">
    <nav className="text-lg">
        <ul className="flex h-full flex-wrap items-center justify-center gap-3">
            <li>
                <a className="cursor-pointer hover:underline">Home</a>
            </li>
            <li>
                <a className="cursor-pointer hover:underline">Contact</a>
            </li>
            <li>
                <a className="cursor-pointer hover:underline">About</a>
            </li>
        </ul>
    </nav>
    <nav className="text-lg">
        <ul className="flex h-full flex-wrap items-center justify-center gap-5">
            <li className="cursor-pointer">
                <a>
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
                </a>
            </li>
            <li className="cursor-pointer">
                <a>
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
                </a>
            </li>
        </ul>
    </nav>
    <aside className="text-center text-sm">
        <p>&copy; 2024 NavigateUI. All Rights Reserved.</p>
    </aside>
</footer>
  )
}
export default Footer