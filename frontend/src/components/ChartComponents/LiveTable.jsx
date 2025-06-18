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
            <h2>Live Vote Table</h2>
            <table className="w-full border ">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Vote</th>
                        <th>Time of Submission</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dummyVotes.map((vote) => (
                            <tr className="border">
                                <td>{vote.name}</td>
                                <td>{vote.vote}</td>
                                <td>{vote.timeOfSubmission}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}