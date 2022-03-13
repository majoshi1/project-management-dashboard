import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

export default (props) => (
    <Card style={{width: props.width ? props.width : "unset"}}>
        <CardHeader title={props.title} />
        <CardContent>{props.details}</CardContent>
    </Card>
);
