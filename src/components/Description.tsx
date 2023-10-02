export function Description() {
    return (
        <ul className='w-full max-w-3xl p-4 m-2 rounded-lg text-white border-2 flex flex-col gap-2 md:p-8'>
            <li className='flex items-center gap-2'>
                <div className='w-5 h-5 bg-green-200 rounded-full'>
                </div>
                <p>Say what happened</p>
            </li>
            <li className='flex items-center gap-2'>
                <div className='w-5 h-5 bg-pink-300 rounded-full'>
                </div>
                <p>Provide reassurance</p>
            </li>
            <li className='flex items-center gap-2'>
                <div className='w-5 h-5 bg-orange-200 rounded-full'>
                </div>
                <p>Say why it happened</p>
            </li>
            <li className='flex items-center gap-2'>
                <div className='w-5 h-5 bg-purple-200 rounded-full'>
                </div>
                <p>Help them fix it</p>
            </li>
            <li className='flex items-center gap-2'>
                <div className='w-5 h-5 bg-blue-100 rounded-full'>
                </div>
                <p>Give them a way out</p>
            </li>
        </ul>
    )
}