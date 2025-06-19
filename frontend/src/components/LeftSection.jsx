import { useState } from "react";
import { checkNameExists, submitVote } from "../../services/voteServices";
export default function LeftSection({ onVoteSubmitted }) {

    const [name, setName] = useState("");
    const [voteValue, setVoteValue] = useState(null);


    async function handleSubmit(e) {
        e.preventDefault();

        if (!name || voteValue === null) {
            alert("Please enter name and select a vote.");
            return;
        }

        try {
            const exists = await checkNameExists(name);
            if (exists) {
                alert("This name has already submitted a vote.");
                return;
            }

            await submitVote(name, voteValue === 'true');
            if (onVoteSubmitted) onVoteSubmitted();
            alert("Vote submitted successfully!");
            document.getElementById('userForm').reset()
            setName("");
            setVoteValue(null);


        } catch (err) {
            console.error("Vote submission failed:", err);
            alert("Something went wrong.");
        }
    }
    return (
        <>
            <div className='w-1/2 bg-amber-200 flex flex-col items-center justify-center'>
                <form id="userForm" className='flex flex-col' onSubmit={handleSubmit}>
                    <label className="text-lg font-medium text-gray-700">Please enter your name</label>
                    <input
                        type="text"
                        placeholder="Username"
                        name="name"
                        required
                        className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                        onChange={(e) => setName(e.target.value)} />
                    <label className="text-lg font-medium text-gray-700">Please select your vote</label>
                    <div className="flex gap-6 items-center justify-center">
                        <label className="text-lg font-medium text-gray-700">
                            <input type="radio" name="vote" value={true} required onChange={(e) => setVoteValue(e.target.value)} />
                            Yes
                        </label>
                        <label className="text-lg font-medium text-gray-700">
                            <input type="radio" name="vote" value={false} onChange={(e) => setVoteValue(e.target.value)} />
                            No
                        </label>
                    </div>
                    <button className="mt-4 bg-green-300 py-2 rounded hover:bg-green-400 transition text-lg font-medium text-gray-700"> Click to enter your vote</button>
                </form>
            </div>
        </>
    )
}