import React from 'react'
import {FaUserPlus} from 'react-icons/fa';
import {MdFindInPage} from 'react-icons/md'
import {IoMdSend} from 'react-icons/io'

const HowItWorks = () => {
  return (
    <div className='howitworks'>
     <div className='container'>
      <h3>How It Works</h3>
      <div className='banner'>
        <div className='card'>
          <FaUserPlus/>
          <p>Create Account</p>
          <p>Rem temporibus adipisci doloribus soluta dolorem, quibusdam omnis culpa veritatis consequuntur magnam, laudantium tenetur, dicta repellat delectus itaque quo id. Soluta, assumenda!</p>
        </div>
         <div className='card'>
          <MdFindInPage/>
          <p>Find Job / Post Job</p>
          <p>Rem temporibus adipisci doloribus soluta dolorem, quibusdam omnis culpa veritatis consequuntur magnam, laudantium tenetur, dicta repellat delectus itaque quo id. Soluta, assumenda!</p>
        </div>
         <div className='card'>
          <IoMdSend/>
          <p>Send The Details</p>
          <p>Rem temporibus adipisci doloribus soluta dolorem, quibusdam omnis culpa veritatis consequuntur magnam, laudantium tenetur, dicta repellat delectus itaque quo id. Soluta, assumenda!</p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default HowItWorks