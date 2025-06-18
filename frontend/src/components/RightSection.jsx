import BarChart from "./ChartComponents/BarChart";
import LineChart from "./ChartComponents/LineChart";
import LiveTable from "./ChartComponents/LiveTable";

export default function RightSection() {
    return (
        <>
            <div className='w-1/2 bg-blue-500 h-screen'>
                <div className="grid grid-cols-2 gap-4 h-screen p-4">
                    <LiveTable />
                    <LineChart />
                    <BarChart />
                </div>
            </div>
        </>
    )
}