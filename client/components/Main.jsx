import React from 'react'
import Image from 'next/image'
import { ImFire } from 'react-icons/im'
import opLogo from '../assets/op.png'
import { TransactionContext } from '../context/TransactionContext'
import { useContext } from 'react'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import TransactionLoader from '../components/TransactionLoader'
import Footer from '../components/Footer'
import {BiRefresh} from "react-icons/bi"

import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";


Modal.setAppElement('#__next')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#0a0b0d',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(10, 11, 13, 0.75)',
  },
}

const style = {
    wrapper: `w-screen flex items-center justify-center mt-20`,
    content: `bg-[#191B1F] w-[40rem] rounded-2xl p-4 border-4 border-red-900`,
    formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
    transferPropContainer: `bg-[#20242A] my-3 rounded-2xl p-6 text-3xl  border border-[#20242A] hover:border-[#ff0000]  flex justify-between`,
    transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl`,
    currencySelector: `flex w-1/6`,
    currencySelectorContent: `w-full h-min flex justify-between items-center bg-[#2D2F36] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
    currencySelectorIcon: `flex items-center`,
    currencySelectorTicker: `mx-2`,
    currencySelectorArrow: `text-lg`,
    boxTitle: `flex items-center flex-row`,
    fireImg: `ml-2`,
    refreshStyle: `mr-0`,
    refreshIcon: `text-3xl hover:fill-red-500`,
    confirmButton: `bg-[#d40000] my-2 rounded-2xl py-6 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#ff0000] hover:bg-[#ff3e3e] hover:border-[#ff8181]`,
  }
  

const Main = () => {
  const { formData, handleChange, sendTransaction } = useContext(TransactionContext)
  const router = useRouter()

  const handleSubmit = async (e) => {
    const { addressTo, amount } = formData
    e.preventDefault()

    if (!addressTo || !amount) return

    sendTransaction()
  }

  return (
        <div className={style.wrapper}>
            <div className={style.content}>
              <div className={style.formHeader}>
                <div className={style.boxTitle}>
                  Burn OP Tokens 
                  <ImFire className={style.fireImg}/>
                </div>
                <button type='submit' className={style.refreshStyle} onClick={() => window.location.reload(false)} > 
                    <BiRefresh id='refresh-text' className={style.refreshIcon}/>   
                </button>
              </div>
              <div className={style.transferPropContainer}>
                <input
                  type='text'
                  className={style.transferPropInput}
                  placeholder='0.0'
                  pattern='^[0-9]*[.,]?[0-9]*$'
                  onChange={e => handleChange(e, 'amount')}
                  onClick={() =>  navigator.clipboard.writeText('0x000000000000000000000000000000000000dEaD')}
                />
                <div className={style.currencySelector}>
                  <div className={style.currencySelectorContent}>
                    <div className={style.currencySelectorIcon}>
                      <Image src={opLogo} alt='eth logo' height={30} width={30} />
                    </div>
                    <div className={style.currencySelectorTicker}>OP</div>
                  </div>
                </div>
              </div>
              <div className={style.transferPropContainer}>
                <input
                  type='text'
                  className={style.transferPropInput}
                  defaultValue = ''
                  placeholder='Click To Copy And Paste OP Burn Address'
                  onClick={() =>  navigator.clipboard.writeText('0x000000000000000000000000000000000000dEaD')}
                  onChange={e => handleChange(e, 'addressTo')}
                />
                <div className={style.currencySelector}></div>
              </div>
              <div onClick={e => handleSubmit(e)} className={style.confirmButton}>
                Send To Burn Wallet
              </div>
            </div>
          <Modal isOpen={!!router.query.loading} style={customStyles} >
            <TransactionLoader />
          </Modal>

          
          <Footer />
          <ReactTooltip
            anchorId="refresh-text"
            place="top"
            content="Click To Refresh" 
          />
          </div>
        )
}

export default Main