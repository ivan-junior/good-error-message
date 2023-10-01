
export function ErrorMessage() {
    return (
        <div className='w-full max-w-3xl bg-white p-4 m-2 rounded-lg text-black md:p-8'>
            <h1 className='text-xl md:text-3xl font-semibold mb-4 text-gray-800'>
                <span className='bg-green-200'>Unable to connect your account</span>
            </h1>
            <div className='mb-8'>
                <span className='bg-pink-300'>Your changes were saved,</span> <span className='bg-orange-200'>but we could not connect your account due to a technical issue on our end.</span> <span className='bg-purple-200'>Please try connecting again.</span> <span className='bg-blue-100'>If the issue keeps happening, <a href="#" className='hover:border-b-2 border-black'>contact Customer Care.</a></span>
            </div>

            <div className='flex items-center justify-around md:justify-end md:gap-5'>
                <button className='p-2 rounded-lg border-2 border-red-500 text-red-500 cursor-pointer'>
                    Cancel
                </button>
                <button className='p-2 rounded-lg border-2 border-red-500 bg-red-500 text-white cursor-pointer'>
                    Try Again
                </button>
            </div>
        </div>
    )
}