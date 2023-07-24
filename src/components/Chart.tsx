
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement, 
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display:false,
      position: 'top' as const,
    },
  },
  scales:{
    y:{
      display:false
    },
    x:{
      display:false
    }
  }
};

const labels = ['', '', '', '', ''];



export const  Chart = ({info}:{info:{cantidad?:number}})=> {
    const {cantidad} = info;
    const data = {
        labels,
        datasets: [
          {
            label: '',
            data: labels.map((label,indx) =>  indx !== labels.length-1  ? faker.datatype.number({ min: 0, max: cantidad }) : cantidad),
            borderColor: 'white',
            backgroundColor: '',
            tension:0.4,
            pointBackgroundColor:'white',    
               
          }
        ],
        
        
      };
  return <Line options={options} data={data} />;
}
