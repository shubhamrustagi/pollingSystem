import { Line } from 'react-chartjs-2'

export default function LineChart() {
    const lineChartData = {
        labels: ['15 June 2025', '16 June 2025', '17 June 2025'],
        datasets: [{
            label: 'Yes votes',
            data: [2, 4, 5],
            borderColor: '#22c55e',
            backgroundColor: '#bbf7d0',
        },
        {
            label: 'No votes',
            data: [4, 1, 4],
            borderColor: '#c34447',
            backgroundColor: '#bbf7d0',
        }]
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
        <div className="bg-green-200 flex flex-col items-center justify-center">
            <Line data={lineChartData} options={options} />
        </div>
    )
}