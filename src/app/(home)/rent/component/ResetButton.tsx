import reset from '../../../../../public/assets/reset.svg';
import Image from 'next/image';

const ResetButton = () => {
  return (
      <div className="flex justify-between items-center mb-4 rounded-xl border border-[#E6E9ED] bg-white p-2">
        <h2 className="text-base px-4 font-medium text-black ">Property Preference</h2>
        <button className="text-sm font-medium bg-[#F4F6F8] w-fit flex gap-2.5 items-center text-neutral-10 rounded-lg py-4 ps-4 pe-2 ">Reset Filter
            <Image src={reset} alt="" />
        </button>
      </div>

  )
}

export default ResetButton