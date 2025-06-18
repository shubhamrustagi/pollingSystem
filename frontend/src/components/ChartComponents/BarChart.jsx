import { Bar } from 'react-chartjs-2'

export default function BarChart() {
    const barChartData = {
        labels: ['Yes', 'No'],
        datasets: [
            {
                label: 'Yes',
                data: [10, 0],
                backgroundColor: '#22c55e',
            },
            {
                label: 'No',
                data: [0, 7],
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