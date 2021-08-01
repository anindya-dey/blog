import Head from "next/head";
import Link from "next/link";

import "../styles/globals.css";

const PageTitle = "Blog Corner";

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto w-10/12">
      <Head>
        <title>{PageTitle}</title>
        <meta name="description" content="Blogs composed by Anindya" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="text-center">
        <Link href="/">
          <a>
            <h1 className="mt-5 mb-2 font-medium text-7xl text-gray-800">
              {PageTitle}
            </h1>
          </a>
        </Link>
        <nav>
          <ul className="px-4 py-3 flex justify-center space-x-10 text-blue-700">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Component {...pageProps} />

      <footer className="mt-6 text-center">
        <h3 className="mb-3 font-thin font-mono text-sm text-gray-600">
          &copy; <a href="https://anindyadey.com">Anindya</a>
        </h3>
      </footer>
    </div>
  );
}

export default MyApp;
