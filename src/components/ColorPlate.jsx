import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ColorPlate = ({color, index, onIconClick, lockStatus}) => {

  const handleCopy = (e) => {
    navigator.clipboard.writeText(e.target.innerText);
    toast("Copied to clipboard!");
  }

  const handleLockUnlock = (e) => {
    onIconClick(index)
  }

  return (
    <div style={{backgroundColor: color}} className="flex flex-col gap-2 items-center justify-end pb-10 font-bold">
        <ToastContainer position="bottom-center" autoClose={1000} pauseOnHover={false} theme="dark" hideProgressBar/>
        <div className="bg-white px-3 py-1 rounded-md">
          <p onClick={handleCopy} className="hover:cursor-pointer">{color}</p>
        </div>
        <div onClick={handleLockUnlock} className="cursor-pointer text-xl text-transparent hover:text-white">
          { lockStatus ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
          }
        </div>
    </div>
  )
}

export default ColorPlate