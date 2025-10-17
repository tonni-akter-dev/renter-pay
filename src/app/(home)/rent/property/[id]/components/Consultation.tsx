import Container from '@/components/shared/Container'
import React from 'react'
import consultant1 from '../../../../../../../public/assets/consultant.png';
import whiteLogo from '../../../../../../../public/assets/icons/white-logo.png';
import support from '../../../../../../../public/assets/icons/support.png';
import Image from 'next/image';

const Consultation = () => {
    return (
        <Container>
            <div className='flex flex-col lg:flex-row items-center rounded-[30px] w-full lg:h-[495px]' style={{ background: 'linear-gradient(180deg, #162525 0%, #234242 100%)' }}>
                <div className='lg:flex-shrink-0 lg:py-[83px] lg:ps-[71px] p-8 lg:p-0'>
                    <div className='lg:w-[468px] '>
                        <h5 className='gap-1.5 flex items-center text-white font-semibold text-[26px] mb-8'>
                            <Image src={whiteLogo} alt="" />Renter Pay
                        </h5>
                        <h2 className='text-display font-bold text-secondary-50 leading-[110%] mb-2'>Looking to Rent a Property?</h2>
                        <p className='text-[#E6E9ED] font-medium text-xl mb-8'>Schedule a visit today or talk to our agent for more details.</p>
                        <button className='flex gap-2.5 text-primary-900 text-base font-semibold p-4 bg-primary-50 rounded-lg hover:bg-amber-50 border border-primary-50 hover:text-primary-500'>
                            Get a Free Consultation
                            <Image src={support} alt="" />
                        </button>
                    </div>
                </div>
                <div className='flex-1 w-full lg:w-auto lg:block hidden'>
                    <Image
                        src={consultant1}
                        alt="Consultant"
                        className='w-full lg:h-[495px] object-cover rounded-r-[30px]'
                    />
                </div>
            </div>
        </Container>
    )
}

export default Consultation