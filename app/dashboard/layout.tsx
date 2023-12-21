import { Inter } from 'next/font/google'


export default function Dashboard({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>

            {children}

        </section>
    )
}