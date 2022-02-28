import * as React from 'react';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import NotificationsIcon from '@material-ui/icons/Notifications';

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

const TodayBar = (props: Props) => {
    const { orders = [], customers = {} } = props;
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <List dense={true}>
                <ListItem
                    key="1"
                    button
                    component={Link}
                    to={`/commands/1`}
                >
                    <ListItemAvatar>                            
                        <KeyboardArrowLeft/>
                        <Spacer />
                        <KeyboardArrowRight/>
                        <Spacer/>
                    </ListItemAvatar>
                    <ListItemText
                        primary=""
                        secondary="Today, 05 Aug"
                    />
                    <ListItemSecondaryAction>
                        <span className={classes.cost}>                            
                            <NotificationsIcon/>
                            <MoreVertIcon/>
                        </span>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </Card>
    );
};

export default TodayBar;
