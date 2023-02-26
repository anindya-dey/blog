import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface INavProps {
  navItems: string[];
}

export default function Nav({ navItems }: INavProps) {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  } // To avoid hydration error

  return (
    <>
      <header
        aria-label="Site Header"
        className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700"
      >
        <div className="w-11/12 max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 md:w-9/12 lg:w-10/12">
          <div className="flex items-center justify-between h-16">
            <div className="md:flex md:items-center md:gap-12">
              <h1 className="text-3xl font-bold text-gray-600 dark:text-gray-200">
                AD.
              </h1>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Site Nav">
                <ul className="flex items-center gap-6 text-sm">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <a
                        className="text-gray-600 transition hover:text-gray-600/75 dark:text-gray-200 dark:hover:text-gray-200/75"
                        href="#"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <button
                  className="inline-block p-3 text-gray-600 transition border border-gray-600 rounded-full hover:bg-gray-600 hover:text-gray-200 focus:outline-none focus:ring-0 active:bg-gray-600"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <span className="sr-only">Theme Toggle</span>

                  {theme == "dark" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <div className="block md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-block p-3 text-gray-600 transition border border-gray-600 rounded-full hover:bg-gray-600 hover:text-gray-200 focus:outline-none focus:ring-0 active:bg-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`${
          isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
        } md:hidden flex px-4 py-4 w-full h-full absolute transition-all duration-300 ease-in-out bg-white dark:bg-gray-900`}
      >
        <div className="flex flex-col text-gray-600 capitalize dark:text-gray-300">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="mt-2 transition-colors duration-300 transform hover:text-gray-900 dark:hover:text-gray-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
