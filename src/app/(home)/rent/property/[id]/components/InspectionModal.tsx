import Link from 'next/link';
import React, { useState, ChangeEvent } from 'react';
import logo from "../../../../../../../public/assets/logo.png";
import upload from "../../../../../../../public/assets/icons/upload.png";
import Image from 'next/image';


interface IProps {
    closeModal: () => void;
}

const InspectionModal: React.FC<IProps> = ({ closeModal }) => {
    const [frontSideFile, setFrontSideFile] = useState<File | null>(null);
    const [backSideFile, setBackSideFile] = useState<File | null>(null);

    const handleFrontSideChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFrontSideFile(e.target.files[0]);
        }
    };

    const handleBackSideChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setBackSideFile(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        console.log('Uploading files:', { frontSideFile, backSideFile });
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 lg:top-0 top-[30%]"
            style={{ backgroundColor: '#0000004D' }}
            onClick={closeModal}
        >
            <div
                className="bg-white rounded-[20px] p-10 w-full max-w-[804px] relative"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <div className="text-center flex justify-center flex-col items-center mx-auto">
                        <Link
                            href="/"
                            className="mb-6 flex items-center gap-1 text-2xl font-bold text-primary-500"
                        >
                            <Image src={logo} alt="" />
                            RenterPay
                        </Link>

                        <p className="text-neutral-500 mb-8 text-[20px] font-medium">
                            As this is your first time submitting an inspection request, <br /> please provide your ID/ Driving license/ Passport to continue.
                        </p>

                    </div>
                    <button
                        onClick={closeModal}
                        className="absolute right-8 top-8 text-gray-500 hover:text-gray-700 bg-[#F4F6F8] size-[45px] rounded-full flex justify-center items-center"

                        aria-label="Close modal"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>


                <div className="flex lg:flex-row flex-col gap-6">
                    <div className="border-2 border-dashed border-primary-300 rounded-[20px]  py-5 text-center w-full h-[225px]">
                        <label className="text-primary-900 text-base font-semibold mb-7" htmlFor="frontSide">
                            Front Side
                        </label>
                        <input
                            type="file"
                            id="frontSide"
                            className="hidden"
                            onChange={handleFrontSideChange}
                            accept="image/*"
                        />
                        <label
                            htmlFor="frontSide"
                            className="cursor-pointer flex flex-col items-center justify-center py-4"
                        >
                            {frontSideFile ? (
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm text-gray-700">{frontSideFile.name}</span>
                                </div>
                            ) : (
                                <>
                                     <div className='flex flex-col items-center'>
                                    <Image src={upload} alt="" />
                                    <div className='mt-4'>
                                        <p className="text-base font-semibold text-black">Drag & Drop <span className='text-primary-500'>image</span> here</p>
                                        <Link href="#" className='text-neutral-500 text-sm'>
                                        <span className='underline text-primary-500'>or browse images </span>

                                        on your computer
                                        </Link>

                                    </div>
                                </div>
                                </>
                            )}
                        </label>
                    </div>

                    <div className="border-2 border-dashed border-primary-300 rounded-[20px]  py-5 text-center w-full h-[225px]">
                        <label className="text-primary-900 text-base font-semibold mb-7" htmlFor="backSide">
                            Back Side (Optional)
                        </label>
                        <input
                            type="file"
                            id="backSide"
                            className="hidden"
                            onChange={handleBackSideChange}
                            accept="image/*"
                        />
                        <label
                            htmlFor="backSide"
                            className="cursor-pointer flex flex-col items-center justify-center py-4"
                        >
                            {backSideFile ? (
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm text-gray-700">{backSideFile.name}</span>
                                </div>
                            ) : (
                                    <div className='flex flex-col items-center'>
                                        <Image src={upload} alt="" />
                                        <div className='mt-4'>
                                            <p className="text-base font-semibold text-black">Drag & Drop <span className='text-primary-500'>image</span> here</p>
                                            <Link href="#" className='text-neutral-500 text-sm'>
                                            <span className='underline text-primary-500'>or browse images </span>

                                            on your computer
                                            </Link>

                                        </div>
                                    </div>
                            )}
                        </label>
                    </div>
                </div>

                <div className="flex justify-center gap-4 mt-6">
                    <button
                        onClick={closeModal}
                        className="px-4 py-2  text-base font-medium border border-primary-500  rounded-md hover:bg-primary-500 text-primary-500 hover:text-white transition-colors"
                    >
                        Back
                    </button>
                    <button
                        onClick={handleUpload}
                        className="px-4 py-2  text-base font-medium border border-primary-500  rounded-md hover:bg-transparent bg-primary-500 hover:text-primary-500 text-white transition-colors"
                    >
                        Upload
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InspectionModal;