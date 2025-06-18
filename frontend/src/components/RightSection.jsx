export default function RightSection() {
    return (
        <>
            <div className='w-1/2 bg-blue-500 h-screen'>
                <div className="grid grid-cols-2 gap-4 h-screen p-4">
                    <div className="bg-purple-400 col-span-2 flex flex-col items-center justify-center">
                        01
                    </div>
                    <div className="bg-red-400 flex flex-col items-center justify-center">
                        02
                    </div>
                    <div className="bg-green-400 flex flex-col items-center justify-center">
                        03
                    </div>
                </div>
            </div>
        </>
    )
}