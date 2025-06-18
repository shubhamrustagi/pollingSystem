export default function LeftSection() {



    function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const vote = formData.get('vote');
        console.log("Username: ", name);
        console.log("Vote: ", vote);
    }
    return (
        <>
            <div className='w-1/2 bg-amber-200 flex flex-col items-center justify-center'>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <label className="text-lg font-medium text-gray-700">Please enter your name</label>
                    <input type="text" placeholder="Username" name="name" required className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-green-400"></input>
                    <label className="text-lg font-medium text-gray-700">Please select your vote</label>
                    <div className="flex gap-6 items-center justify-center">
                        <label>
                            <input type="radio" name="vote" value="yes" />
                            Yes
                        </label>
                        <label>
                            <input type="radio" name="vote" value="no" />
                            No
                        </label>
                    </div>
                    <button className="mt-4 bg-blue-300 text-white py-2 rounded hover:bg-blue-400 transition"> Click to enter your vote</button>
                </form>
            </div>
        </>
    )
}