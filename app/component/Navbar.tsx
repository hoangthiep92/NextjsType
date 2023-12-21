"use client"

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {

    const router = useRouter();

    return (
        <nav>
            {/* <div className="logo">
                <Image src="../../public/next.svg"
                    alt="logo"
                    width={128}
                    height={77}
                />
            </div> */}
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/dashboard">Dashboard</Link>
            <button onClick={() => router.push('/dashboard')}>dashboard</button>
        </nav>
    )
}

export default Navbar;