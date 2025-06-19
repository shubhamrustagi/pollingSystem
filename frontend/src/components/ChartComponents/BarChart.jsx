import { Bar } from 'react-chartjs-2'
import { useState, useEffect } from 'react';
import { fetchSummary } from '../../../services/voteServices';
export default function BarChart({ reload }) {

    const [summary, setSummary] = useState({ yes: 0, no: 0 });

    useEffect(() => {
        fetchSummary()
            .then(setSummary)
            .catch((err) => {
                console.error('Failed to fetch summary:', err);
            });
    }, [reload]);


    const barChartData = {
        labels: ['Yes', 'No'],
        datasets: [
            {
                label: 'Yes',
                data: [summary.yes, 0],
                backgroundColor: '#22c55e',
            },
            {
                label: 'No',
                data: [0, summary.no],
                backgroundColor: '#ef4444',
            },
        ],
    }
    const options = {
        plugins: {
            legend: {
                labels: {
                    color: '#1f2937',
                    font: {
                        weight: 'bold',
                        size: 14,
                    },
                },
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#1f2937',
                    font: {
                        weight: '500',
                    },
                },
            },
            y: {
                ticks: {
                    color: '#1f2937',
                    font: {
                        weight: '500',
                    },
                },
            },
        },
        responsive: true,
    }
    return (
        <div className="bg-pink-200 flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold mb-2">Overall Results</h2>
            <Bar data={barChartData} options={options} />
        </div>
    )
}