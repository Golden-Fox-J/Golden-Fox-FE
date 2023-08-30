import React from 'react';
export default function Details() {
    return (



        <body className="font-sans antialiased bg-gray-200">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center min-h-screen">
                    <div className="w-full max-w-sm px-3 py-6 sm:w-1/2 lg:w-1/3">
                        <div className="overflow-hidden bg-white rounded-lg shadow-xl">
                            <div
                                className="h-56 p-4 bg-center bg-cover"
                                style={{
                                    backgroundImage:
                                        'url(https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)',
                                }}
                            >
                                <div className="flex justify-end">
                                    <svg
                                        className="w-6 h-6 text-white fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        {/* SVG path */}
                                    </svg>
                                </div>
                            </div>
                            <div className="p-4">
                                <p className="text-sm font-bold tracking-wide text-gray-700 uppercase">
                                    Detached house • 5y old
                                </p>
                                <p className="text-3xl text-gray-900">$750,000</p>
                                <p className="text-gray-700">742 Evergreen Terrace</p>
                            </div>
                            <div className="flex p-4 text-gray-700 border-t border-gray-300">
                                {/* ... */}
                            </div>
                            <div className="px-4 pt-3 pb-4 bg-gray-100 border-t border-gray-300">
                                {/* ... */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
};














            /* <div>

        <div>
            <img src="public/images/w2.jpg"/>  
        </div>

        <div>
            <h2>Title: Apple Watch</h2>
            <img src="public/images/w2.jpg"/>
            <p>Details: 2020 Apple watch ,hear detection and calling properity</p>
            <p>Price: 200 J</p>
            <p>Contact Informations: +962145766324</p>
        </div>




        </div>



        <h2>Title: Apple Watch</h2>
        <img src="public/images/w2.jpg"/>
        <p>Details: 2020 Apple watch ,hear detection and calling properity</p>
        <p>Price: 200 J</p>
        <p>Contact Informations: +962145766324</p> */

