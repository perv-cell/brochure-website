'use client'
import '@/components/buttons/buttons.css'
import { useState } from 'react'
import ModalForm from '../modelform/modelForm'


export function Button1(nameButton: string){

return (
  <button className="animated-button mt-6">
  <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
  </svg>

    <span className="text">{nameButton}</span>

  <span className="circle"></span>

  <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
  </svg>
  </button>
  )
}
interface ButtonProps {
  name: string
}

export function ButtonBeautiful({name}:ButtonProps){

return (
  <button
    type="button"
    className="
      text-white font-black rounded-[5px] cursor-pointer
      px-[3.3em] py-[1em] text-[16px]
      bg-gradient-to-b from-[#4687fc] to-[#3f5efb]
      border-b-2 border-[#4687fc]
      shadow-[rgba(63,94,251,0.2)_0px_40px_29px_0px]
      will-change-transform
      transition-all duration-300

      [transform:perspective(200px)_rotateX(15deg)]
      hover:[transform:perspective(180px)_rotateX(30deg)_translateY(2px)]
      active:[transform:perspective(170px)_rotateX(36deg)_translateY(5px)]
    "
  >
    { name}
  </button>
  )
}

export function ButtonModelForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return(
  <div>
    <button
        id="contactme"
         onClick={() => setIsModalOpen(true)}
      className='px-6 py-3 max-w-[350px] min-w-[300px]'
          >Связаться с нами</button>
        <div>
      <ModalForm
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          /></div>
    </div>
  )
}
