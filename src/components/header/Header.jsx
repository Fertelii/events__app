import Image from "next/image"
import Link from "next/link"


export const Header = () => (
    <header>
        <div>
            <div className="topNav">
                <Image alt="logo" src={'/images/logo_black.png'} width={50} height={50} />
                <nav>
                    <ul>
                        <li>
                            <Link href='/' passHref>Home</Link>
                        </li>
                        <li>
                            <Link href='/events' passHref>Events</Link>
                        </li>
                        <li>
                            <Link href='/about-us' passHref>About us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <h1 className="title">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </div>
    </header>
)