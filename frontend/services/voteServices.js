const BASE_URL = 'http://localhost:6800/api';

export async function fetchVotes() {
    const res = await fetch(`${BASE_URL}/votes`);
    if (!res.ok) throw new Error('Failed to fetch votes');
    const result = await res.json(); 
    return result.voteEntries;
}

export async function fetchSummary() {
    const res = await fetch(`${BASE_URL}/analysis/summary`);
    if (!res.ok) throw new Error('Failed to fetch summary');
    const result = await res.json();
    return result.data; 
}

export async function fetchTrends() {
    const res = await fetch(`${BASE_URL}/analysis/trends`);
    if (!res.ok) throw new Error('Failed to fetch trends');
    return await res.json(); 
}

export async function checkNameExists(name) {
    const res = await fetch(`${BASE_URL}/votes/check?name=${encodeURIComponent(name)}`);
    if (!res.ok) throw new Error('Name check failed');
    const result = await res.json();
    return result.exists; 
}
  
  export async function submitVote(name, choice) {
    const res = await fetch(`${BASE_URL}/votes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, choice }),
    });
    if (!res.ok) throw new Error('Failed to submit vote');
    return await res.json();
}