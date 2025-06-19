import { useState, useEffect } from "react";
import { fetchVotes } from "../../../services/voteServices";
export default function LiveTable({ reload }) {
    const [votes, setVotes] = useState([]);

    useEffect(() => {
        fetchVotes()
            .then((data) => {
                console.log("Fetched votes from backend:", data);
                setVotes(data);
            })
            .catch((err) => {
                console.error("Failed to fetch votes:", err);
            });
    }, [reload]);

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
                            votes.map((vote, i) => (
                                <tr key={i} className="border-t even:bg-white odd:bg-gray-500">
                                    <td className="px-4 py-2">{vote.name}</td>
                                    <td className="px-4 py-2">{vote.choice ? 'Yes' : 'No'}</td>
                                    <td className="px-4 py-2">{new Date(vote.castedAt).toLocaleString()}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}