import '../styles/globals.css'
import Link from 'next/link'
function MyApp({ Component, pageProps }) {
  
  return(
  <div>
   <nav className="border-b p-6">
        <p className="text-4xl font-bold">UFPE NFT MARKET</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-pink-500">
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-pink-500">
              Sell Digital Asset
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-pink-500">
              My Digital Assets
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-pink-500">
              Creator Dashboard
            </a>
          </Link>
           <Link href="/perfil">
            <a className="mr-6 text-pink-500">
              Perfil
            </a>
          </Link>
        </div>
      </nav>
    <Component {...pageProps} />
   
  </div>
  )
  

}

export default MyApp
