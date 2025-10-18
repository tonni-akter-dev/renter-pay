'use client'
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import Container from '@/components/shared/Container';
import React, { useState } from 'react';
import Image from 'next/image';
import InspectionForm from '../components/InspectionForm';

const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Rent", href: "/rent" },
    { label: "Maple Grove Garden House", href: "/rent" },
    { label: "Inspection Request", isActive: true },
];

const InspectionRequest = () => {

    return (
        <div>
            <Breadcrumbs items={breadcrumbItems} />
            <Container>
                <div className="py-12">
                    <div className='text-center'>
                        <h1 className="text-h3 font-semibold text-black">Schedule a Property Inspection</h1>
                        <p className='text-neutral-500 text-base mt-4'>Book a convenient time to visit and explore the property in person.</p>
                    </div>
                    <div className="grid grid-cols-12 gap-10 mt-10">
                        {/* Left side - Form */}
                        <InspectionForm />
                        {/* Right side - Property Details */}
                        <div className="lg:col-span-7 col-span-12">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="relative h-48">
                                    <Image
                                        src="/api/placeholder/400/300"
                                        alt="Maple Grove Garden House"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Maple Grove Garden House</h3>

                                    <div className="flex items-center text-gray-600 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>123 Garden Street, Maple Grove</span>
                                    </div>

                                    <div className="grid grid-cols-3 gap-2 mb-4">
                                        <div className="text-center p-2 bg-gray-50 rounded">
                                            <div className="text-xl font-semibold text-gray-800">3</div>
                                            <div className="text-xs text-gray-600">Bedrooms</div>
                                        </div>
                                        <div className="text-center p-2 bg-gray-50 rounded">
                                            <div className="text-xl font-semibold text-gray-800">2</div>
                                            <div className="text-xs text-gray-600">Bathrooms</div>
                                        </div>
                                        <div className="text-center p-2 bg-gray-50 rounded">
                                            <div className="text-xl font-semibold text-gray-800">1200</div>
                                            <div className="text-xs text-gray-600">Sq Ft</div>
                                        </div>
                                    </div>

                                    <div className="border-t pt-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-600">Weekly Rent</span>
                                            <span className="text-xl font-semibold text-primary-500">$280</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">Available</span>
                                            <span className="text-sm font-medium text-green-600">Now</span>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <h4 className="font-semibold text-gray-800 mb-2">Key Features</h4>
                                        <ul className="space-y-1 text-sm text-gray-600">
                                            <li className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Swimming Pool
                                            </li>
                                            <li className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Garden
                                            </li>
                                            <li className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Parking
                                            </li>
                                            <li className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Air Conditioning
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Modal for ID verification */}

        </div>
    )
}

export default InspectionRequest;