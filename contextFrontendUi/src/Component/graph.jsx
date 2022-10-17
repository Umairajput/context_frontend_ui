import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';

const Graph = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        asyncFetch();
    }, []);
    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        isGroup: true,
        xField: '月份',
        yField: '月均降雨量',
        yAxis:false,
        xAxis:true,
        // seriesField: 'name',
        tooltip: true,
        lineDash: [0, 0],
        dodgePadding: 2,
        intervalPadding: 20,
            label: {
            position: 'middle',
            },
             layout: [
                
                 {
                    type: 'interval-adjust-position',
                     tickLine:null,
                 },
                 {
                     type: 'interval-hide-overlap',
                     tickLine:null
                 },
                 {
                     type: 'adjust-color',
                     tickLine:null
                 },
             ],
         };
    return <Column {...config} />;
};

export default Graph