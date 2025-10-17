'use client'
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import Container from '@/components/shared/Container';
import React, { useState } from 'react';
import Image from 'next/image';

const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Rent", href: "/rent" },
    { label: "Maple Grove Garden House", href: "/rent" },
    { label: "Inspection Request", isActive: true },
];

const InspectionRequest = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
    });

    const [showModal, setShowModal] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        setShowModal(true);
        e.preventDefault();
        // Here you would typically handle form submission
        console.log('Form submitted:', formData);
        // Show the modal for ID verification
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <Breadcrumbs items={breadcrumbItems} />
            <Container>
                <div className="py-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Inspection Request</h1>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left side - Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-6">Inspection Request Form</h2>
                                
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                        />
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                                                Preferred Date
                                            </label>
                                            <input
                                                type="date"
                                                id="preferredDate"
                                                name="preferredDate"
                                                value={formData.preferredDate}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                                                Preferred Time
                                            </label>
                                            <select
                                                id="preferredTime"
                                                name="preferredTime"
                                                value={formData.preferredTime}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                            >
                                                <option value="">Select a time</option>
                                                <option value="9:00 AM">9:00 AM</option>
                                                <option value="10:00 AM">10:00 AM</option>
                                                <option value="11:00 AM">11:00 AM</option>
                                                <option value="12:00 PM">12:00 PM</option>
                                                <option value="1:00 PM">1:00 PM</option>
                                                <option value="2:00 PM">2:00 PM</option>
                                                <option value="3:00 PM">3:00 PM</option>
                                                <option value="4:00 PM">4:00 PM</option>
                                                <option value="5:00 PM">5:00 PM</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            Message (Optional)
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                        ></textarea>
                                    </div>
                                    
                                    <button
                                        type="submit"
                                        className="w-full bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600 transition-colors"
                                    >
                                        Submit Request
                                    </button>
                                </form>
                            </div>
                        </div>
                        
                        {/* Right side - Property Details */}
                        <div className="lg:col-span-1">
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
            {showModal && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50"
                    style={{ backgroundColor: '#0000004D' }}
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-lg p-6 w-full max-w-md mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-gray-800">Renter Pay</h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        
                        <p className="text-gray-600 mb-6">
                           {` For your first inspection request submission, you need to provide a valid ID/Driver's License.`}
                        </p>
                        
                        <div className="space-y-4">
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Front Side
                                </label>
                                <input
                                    type="file"
                                    id="frontSide"
                                    className="hidden"
                                    accept="image/*"
                                />
                                <label
                                    htmlFor="frontSide"
                                    className="cursor-pointer flex flex-col items-center justify-center py-4"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                                </label>
                            </div>
                            
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Back Side (Optional)
                                </label>
                                <input
                                    type="file"
                                    id="backSide"
                                    className="hidden"
                                    accept="image/*"
                                />
                                <label
                                    htmlFor="backSide"
                                    className="cursor-pointer flex flex-col items-center justify-center py-4"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                                </label>
                            </div>
                        </div>
                        
                        <div className="flex justify-between mt-6">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                Back
                            </button>
                            <button
                                onClick={() => {
                                    // Handle upload logic here
                                    console.log('Uploading ID documents');
                                    closeModal();
                                }}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                            >
                                Upload
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default InspectionRequest;