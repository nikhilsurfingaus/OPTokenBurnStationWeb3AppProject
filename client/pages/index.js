import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import TransactionHistory from '../components/TransactionHistory'
import ParticlesBg from '../components/ParticlesBg';

const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen text-white select-none flex flex-col justify-between`,
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Header />
      <Main />
      <TransactionHistory />
      <ParticlesBg />

    </div>
  )
}
