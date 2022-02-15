import "../styles/globals.css";
import Link from "next/link";

function Marketplace({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-6xl font-bold flex justify-center font-['Open-Sans'] pb-4 pt-3">NFT Marketplace</p>
        <div className="flex mt-4 flex justify-center">
          <Link href="/">
            <a className="mr-4 text-teal-500">Home</a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-teal-500">Sell Digital Asset</a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-teal-500">My Digital Assets</a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-teal-500">Creator Dashboard</a>
          </Link>
        </div>
      </nav>
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default Marketplace;
