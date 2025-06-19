const BASE_URL = 'http://localhost:6800/api';

export async function fetchVotes() {
    const res = await fetch(`${BASE_URL}/votes`);
    if (!res.ok) throw new Error('Failed to fetch votes');
    const result = await res.json(); 
    console.log('Fetched from API:', result.voteEntries);
    return result.voteEntries;
}

export async function fetchSummary() {
    const res = await fetch(`${BASE_URL}/analysis/summary`);
    if (!res.ok) throw new Error('Failed to fetch summary');
    const result = await res.json();
    console.log('Fetched from API:', result.data);
    return result.data; 
}

export async function fetchTrends() {
    const res = await fetch(`${BASE_URL}/analysis/trends`);
    if (!res.ok) throw new Error('Failed to fetch trends');
    return await res.json(); 
}