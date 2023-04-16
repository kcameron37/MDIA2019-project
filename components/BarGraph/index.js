import {useState, useEffect} from 'react'
import styles from './bargraph.module.css';

import { Bar} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale, 
    LinearScale, 
    BarElement,
    Title, 
    Tooltip, 
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    BarElement,
    Title, 
    Tooltip, 
    Legend
)

export default function BarGraph(){
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState ({})

    useEffect(()=>{
        setChartData({
            labels: ["Before 1890", "1980-1989", "1990-1990", "2000-2009", "2010-2019"], 
            datasets: [
                {      
                labels: '% of Woman in Canada',
                data: [11, 10, 12, 30, 38],
                borderColor:'rgb(51,113,138)',
                backgroundColor: 'rgb(51,113,138)',
        }
    ]
        })

        setChartOptions({
            plugins:{
                legend:{
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Percentage of Homeless Woman in Canada"
                }
            },

            maintainAspectRatio: false,
            responsiveness:true
        })

    }, [])

    return (
        <>
        <div className={styles.container}>
            <Bar data={chartData} options={chartOptions}/>
        </div>
        </>
    )
}