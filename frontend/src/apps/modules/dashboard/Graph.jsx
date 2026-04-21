import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { BarChart, Bar, Tooltip, Legend, XAxis, YAxis, PieChart, Pie } from 'recharts'

function Graph() {

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="container-fluid bg-white hight-1">
      <div className="row">
        <div className="col-sm-12">
          <BarChart
            style={{ width: '100%', maxWidth: '', maxHeight: '83vh', aspectRatio: 1.618 }}
            responsive
            data={data}
          >
            <Bar dataKey="uv" fill="blue" />
            <Bar dataKey="pv" fill="yellow" />
            <Bar dataKey="amt" fill="salmon" />
            <Tooltip />
            <Legend />
            <XAxis dataKey="name" />
            <YAxis width="auto" />

          </BarChart>
        </div>
      </div>
    </div>
  )
}

export default Graph;

export function Mychart() {

  const [data, setData] = useState([]);
  const myapi = () => {
    axios.get("http://localhost:4000/sales").then((res) => {
      console.log(res.data);
      setData(res.data);
    })
  }
  useEffect(() => {
    myapi();
  }, [])

  return (
    <Fragment>
      <BarChart
        style={{ width: '100%', maxWidth: '', maxHeight: '30vh', aspectRatio: 1.618 }}
        responsive
        data={data}
      >
        <Bar dataKey="price" fill="blue" />
        <Bar dataKey="final_price" fill="salmon" />
        <Bar dataKey="stock" fill="red" />
        <Tooltip />
        <Legend />
        <XAxis dataKey="product_name" />
        <YAxis width="auto" />

      </BarChart>
    </Fragment>
  )
}

export function MySecondGraph({ isAnimationActive = true }: { isAnimationActive?: boolean }) {

  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
  ];

  return (
    <Fragment>
      <PieChart style={{ width: '100%', maxHeight: '30vh', aspectRatio: 1 }} responsive>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx="50%"
          cy="100%"
          outerRadius="120%"
          fill="#8884d8"
          label
          isAnimationActive={isAnimationActive}
        />
        <Tooltip />
        <Legend />
      </PieChart>
    </Fragment>

  )
}