import React from 'react';
import {Line} from 'react-chartjs-2';
// Tutorial badsed off of https://www.educative.io/edpresso/how-to-use-chartjs-to-create-charts-in-react

class Graph extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            labels: this.props.xAxis,
            datasets: [
            {
                label: this.props.label,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: this.props.yAxis
            },]
         }
    }
    
    render(){
        return(
            <Line
          data={this.state}
          options={{
            title:{
              display:true,
              text: this.props.title,
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        )
    }
}

 Graph.defaultProps = {
    xAxis: ['January', 'February', 'March', 'April', 'May'],
    label: 'Rainfall',
    yAxis: [65, 59, 80, 81, 56],
    title: 'Average Rainfall per month',
 }

export default Graph;