import { Line } from 'react-chartjs-2'
import { useState, useEffect } from 'react';
import { fetchTrends } from '../../../services/voteServices';
export default function LineChart() {


    const [labels, setLabels] = useState([]);
    const [yesCounts, setYesCounts] = useState([]);
    const [noCounts, setNoCounts] = useState([]);

    useEffect(() => {
        fetchTrends()
            .then(({ yes_votes, no_votes }) => {

                const allDatesSet = new Set([
                    ...yes_votes.map((v) => v.date),
                    ...no_votes.map((v) => v.date),
                ]);
                const allDates = Array.from(allDatesSet).sort();


                const yesMap = new Map(yes_votes.map((v) => [v.date, v.count]));
                const noMap = new Map(no_votes.map((v) => [v.date, v.count]));


                const yes = allDates.map((date) => yesMap.get(date) || 0);
                const no = allDates.map((date) => noMap.get(date) || 0);

                setLabels(allDates.map((d) =>
                    new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
                ));
                setYesCounts(yes);
                setNoCounts(no);
            })
            .catch((err) => console.error('Failed to fetch trends:', err));
    }, []);


    const lineChartData = {
        labels,
        datasets: [{
            label: 'Yes votes',
            data: yesCounts,
            borderColor: '#22c55e',
            backgroundColor: '#bbf7d0',
        },
        {
            label: 'No votes',
            data: noCounts,
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
            <h2 className="text-lg font-semibold mb-2">Daywise Results</h2>
            <Line data={lineChartData} options={options} />
        </div>
    )
}