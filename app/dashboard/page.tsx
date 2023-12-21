"use client"

import { Suspense } from 'react';
import styles from '../styles/dashboard.module.css'
import Link from 'next/link';

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
        throw new Error('Fail to fetch data');
    }
    return res.json();
}
export default async function DashboardPage() {

    const data = await getData();
    return (
        <div>
            <h1>All List</h1>
            <Suspense fallback={<div>Loanding...</div>}>
                {(data || []).map((item: any) => (
                    <Link href={'/dashboard/' + item?.id} key={item?.userId}>
                        <div className={styles.single}>{item?.title}</div>
                    </Link>
                ))}
            </Suspense>
        </div>
    )
}
