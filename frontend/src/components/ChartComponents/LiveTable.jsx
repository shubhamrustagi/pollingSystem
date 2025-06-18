export default function LiveTable() {
    const dummyVotes = [
        { name: 'Alice', vote: 'Yes', timeOfSubmission: '10:00 AM' },
        { name: 'Bob', vote: 'No', timeOfSubmission: '10:05 AM' },
        { name: 'Charlie', vote: 'Yes', timeOfSubmission: '10:10 AM' },
        { name: 'Dave', vote: 'No', timeOfSubmission: '10:15 AM' },
        { name: 'Eve', vote: 'Yes', timeOfSubmission: '10:20 AM' },
        { name: 'Frank', vote: 'No', timeOfSubmission: '10:25 AM' },
        { name: 'Grace', vote: 'Yes', timeOfSubmission: '10:30 AM' },
    ]
    return (
        <div className="bg-purple-400 col-span-2 flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold mb-2 text-center text-gray-700">Live Vote Table</h2>
            <div className="w-full max-h-64 overflow-y-auto rounded">
                <table className="w-full text-sm text-center border ">
                    <thead className="bg-gray-200 text-gray-700 sticky top-0 z-10">
                        <tr>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Vote</th>
                            <th className="px-4 py-2">Time of Submission</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dummyVotes.map((vote) => (
                                <tr className="border-t even:bg-white odd:bg-gray-500">
                                    <td className="px-4 py-2">{vote.name}</td>
                                    <td className="px-4 py-2">{vote.vote}</td>
                                    <td className="px-4 py-2">{vote.timeOfSubmission}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}