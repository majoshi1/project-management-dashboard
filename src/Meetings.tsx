import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import PanToolIcon from '@material-ui/icons/PanTool';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import EditIcon from '@material-ui/icons/Edit';
import PhoneIcon from '@material-ui/icons/Phone';
import ScheduleIcon from '@material-ui/icons/Schedule';
import SendIcon from '@material-ui/icons/Send';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


import { Customer, Order } from './types';

interface Props {
    orders?: Order[];
    customers?: { [key: string]: Customer };
}

const Spacer = () => <span style={{ width: '1em' }} />;

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
    },
    cost: {
        marginRight: '1em',
        color: theme.palette.text.primary,
    },
}));

const Meetings = (props: Props) => {
    const { orders = [], customers = {} } = props;
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader title="Meetings" />
            <List dense={true}>
                {orders.map(record => (
                    <ListItem
                        key={record.id}
                        button
                        component={Link}
                        to={`/commands/${record.id}`}
                    >
                        <ListItemAvatar>                            
                            {customers[record.customer_id] ? (
                                customers[record.customer_id].type === 'break' ? <FreeBreakfastIcon/> 
                                : customers[record.customer_id].type === 'edit' ? <EditIcon/>
                                : customers[record.customer_id].type === 'phone' ? <PhoneIcon/>
                                : customers[record.customer_id].type === 'schedule' ? <ScheduleIcon/>                                
                                : customers[record.customer_id].type === 'send' ? <SendIcon/>     
                                 : <PanToolIcon/>
                            ) : (
                                <PanToolIcon/>
                            )}
                        </ListItemAvatar>
                        <ListItemText
                            primary={record.name}
                            secondary={customers[record.customer_id]
                                ? `${
                                      customers[record.customer_id]
                                          .role
                                  }`
                                : ''}
                        />
                        <ListItemSecondaryAction>
                            <span className={classes.cost}>
                                <MoreVertIcon/>
                            </span>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
            <Spacer/>
            <CardContent>See All</CardContent>
        </Card>
    );
};

export default Meetings;
