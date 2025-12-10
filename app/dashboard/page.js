'use client';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from 'chart.js';


ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);


export default function Dashboard() {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('/api/data')
        .then((res) => res.json())
        .then((d) => setData(d));
    }, []);


    return (
        <div className="container">
        <h1>Dashboard</h1>


        <Bar
            data={{
                labels: data.map((d) => d.name),
                datasets: [
                    {
                    label: 'Value',
                    data: data.map((d) => d.value),
                    },
                ],
            }}
        />


        <a href="/">← Back to Form</a>
        </div>
    );
}