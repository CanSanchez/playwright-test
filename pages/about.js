import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import aboutPage from '../pages/about'
import gradesPage from '../pages/grades'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Link href='/'>
        Go Back
    </Link>
  )
}