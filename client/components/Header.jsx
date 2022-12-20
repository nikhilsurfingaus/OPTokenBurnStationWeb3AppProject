import React from 'react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import opLogo from '../assets/op.png'
import siteLogo from '../assets/siteLogo.png'
import title from '../assets/title.png'
import { TransactionContext } from '../context/TransactionContext'
import { useContext } from 'react'
import 'animate.css';

const style = {
  wrapper: `p-4 w-screen flex justify-between items-center`,
  headerLogo: `flex w-1/4 items-center justify-start`,
  nav: `flex-1 flex justify-center items-center`,
  navItemsContainer: `flex  rounded-3xl`,
  navItem: `px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl`,
  title: `text-4xl font-arial`,
  activeNavItem: `bg-[#20242A]`,
  buttonsContainer: `flex w-1/4 justify-end items-center`,
  button: `flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer`,
  buttonPadding: `p-2`,
  buttonTextContainer: `h-8 flex items-center`,
  buttonIconContainer: `flex items-center justify-center w-8 h-8`,
  buttonAccent: `bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]`,
}


function Header() {

  const { connectWallet, currentAccount } = useContext(TransactionContext)
  const [userName, setUserName] = useState()


  useEffect(() => {
          if(!currentAccount) return
          setUserName(
            `${currentAccount.slice(0, 7)}...${currentAccount.slice(35)}`,
          )
  }, [currentAccount])

  console.log({connectWallet, currentAccount})

  return (
    <div className='animate__animated animate__fadeInDown'>
    <div className={style.wrapper}>
      <div className={style.headerLogo}>
        <Image src={siteLogo} alt='op burnnnn' height={80} width={80} />
      </div>
      <div className={style.nav}>
        <Image src={title} alt='op burnnnn' height={250} width={250} />
      </div>
      <div className={style.buttonsContainer}>
        <div className={`${style.button} ${style.buttonPadding}`}>
          <div className={style.buttonIconContainer}>
            <Image src={opLogo} alt='eth logo' height={20} width={20} />
          </div>
          <p>Optimism</p>
          <div className={style.buttonIconContainer}>
            <AiOutlineDown />
          </div>
        </div>

          {currentAccount ? ( <div className={`${style.button} ${style.buttonPadding}`}>
            <div className={style.buttonTextContainer}>{userName}</div>
          </div>): (<div
            onClick={() => connectWallet()}
            className={`${style.button} ${style.buttonPadding}`}
          >
            <div className={`${style.buttonAccent} ${style.buttonPadding}`}>
              Connect Wallet
            </div>
          </div>)}
      </div>
    </div>
    </div>
  )
}

export default Header