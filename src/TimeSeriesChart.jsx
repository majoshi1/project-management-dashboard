import * as React from 'react';
import { Card, CardContent } from '@material-ui/core';
import {
    ResponsiveContainer,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    LineChart,
    Line
} from 'recharts';

const TimeSeriesChart = (props) => {

    return (
        <Card>
            <CardContent>
                <div style={{ width: '100%', height: 215 }}>
                <ResponsiveContainer width="100%">
                    <LineChart data={props.data}>
                        <Line type="monotone" dataKey="hours" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="date" />
                        <YAxis dataKey="hours" />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            </CardContent>
        </Card>
    );
}
export default TimeSeriesChart;
