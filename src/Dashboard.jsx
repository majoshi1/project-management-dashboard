import React, { useState, useEffect, useCallback } from 'react';

import Timeline from '@material-ui/icons/Timeline';
import Search from '@material-ui/icons/Search';

import { useVersion, useDataProvider } from 'react-admin';

import Card from './Card';
import TimeSeriesChart from './TimeSeriesChart';
import TopPerformers from './TopPerformers';

import Meetings from './Meetings';
import TodayBar from './TodayBar';

const Spacer = () => <span style={{ width: '1em' }} />;

const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '0.5em' },
    rightCol: { flex: 1, marginLeft: '0.5em' },
    singleCol: { marginTop: '1em', marginBottom: '1em' },
};

const Dashboard = () => {
    const [state, setState] = useState({});
    const version = useVersion();
    const dataProvider = useDataProvider();

    const {
        recentOrders,
        topPerformers,
        topPerformersCustomers,
        meetings,
        meetingsCustomers
    } = state;

    const fetchOrders = useCallback(async () => {        
            const ro = [
                {date: '2021-01-01', hours: 31},
                {date: '2021-02-01', hours: 53},
                {date: '2021-03-01', hours: 123},
                {date: '2021-04-01', hours: 234},
                {date: '2021-05-01', hours: 358},
                {date: '2021-07-01', hours: 463},
                {date: '2021-08-02', hours: 563},
                {date: '2021-09-03', hours: 663},
                {date: '2021-10-04', hours: 763},
                {date: '2021-11-01', hours: 893},
                {date: '2021-12-01', hours: 971},
                {date: '2022-01-01', hours: 1081},
            ];         
            const po = [
                {name: 'Mark Nail', total: 150, customer_id: 1},
                {name: 'Mercy Gelaro', total: 53, customer_id: 2},
                {name: 'Valley Amtonyo', total: 25, customer_id: 3},
            ];      
            
            const pc = [
                {role: 'Graphic Designer', customer_id: 1, avatar: 'https://marmelab.com/posters/avatar-9.jpeg'},
                {role: 'Copy Writer', customer_id: 2, avatar: "https://marmelab.com/posters/avatar-114.jpeg"},
                {role: 'UI Designer', customer_id: 3, avatar: "https://marmelab.com/posters/avatar-32.jpeg"},
            ];         
            const m = [
                {name: 'Meet the John', total: 150, customer_id: 1},
                {name: 'Goes to Cafe', total: 53, customer_id: 2},
                {name: 'Update task', total: 25, customer_id: 3},
                {name: 'Call for work', total: 150, customer_id: 4},
                {name: 'Goes to Cafe', total: 53, customer_id: 5},
                {name: 'Send work', total: 25, customer_id: 6},
                {name: 'Meet the John', total: 150, customer_id: 7},
                {name: 'Goes to Cafe', total: 53, customer_id: 8},
                {name: 'Update task', total: 25, customer_id: 9},
                {name: 'Call for work', total: 150, customer_id: 10},
            ];      
            
            const mc = [
                {role: '09:00 - 09:30', customer_id: 1, type: 'hand'},
                {role: '09:30 - 10:00', customer_id: 2, type: 'break'},
                {role: '10:00 - 10:15', customer_id: 3, type: 'edit'},
                {role: '10:15 - 10:45', customer_id: 4, type: 'phone'},
                {role: '10:45 - 11:00', customer_id: 5, type: 'schedule'},
                {role: '11:00 - 11:30', customer_id: 6, type: 'send'},
                {role: '09:00 - 09:30', customer_id: 7, type: 'hand'},
                {role: '09:30 - 10:00', customer_id: 8, type: 'break'},
                {role: '10:00 - 10:15', customer_id: 9, type: 'edit'},
                {role: '10:15 - 10:45', customer_id: 10, type: 'phone'},
            ];      
    
            setState(state => ({
                ...state,
                recentOrders: ro,
                topPerformers: po,
                topPerformersCustomers: pc,
                meetings: m,
                meetingsCustomers: mc
            }));            

    }, [dataProvider]);

    useEffect(() => {
        fetchOrders();
    }, [version]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>  
            <div style={styles.flex}>
                <div style={styles.leftCol}>
                    <div style={styles.flex}>
                        <div style={styles.leftCol}>
                            <h3>Stats, monthly updates&nbsp;<Timeline/></h3>
                        </div>
                        <div style={styles.rightCol}>
                            <h3><Search/></h3>
                        </div>
                    </div>
                </div>
                <TodayBar/>
            </div>
            <div style={styles.flex}>
                <div style={styles.leftCol}>
                    <div style={styles.singleCol}>
                        <h3>Monthly Progress</h3>
                    </div>
                    <div style={styles.flex}>
                        <Card title="16" width="25%" details="Team Members"/>
                        <Spacer /><Spacer />
                        <Card title="24" width="25%" details="Attachments"/>
                        <Spacer /><Spacer />
                        <Card title="32" width="25%" details="Access Credits"/>
                        <Spacer /><Spacer />
                        <Card title="40" width="25%" details="Likes"/>
                    </div>
                    <div style={styles.singleCol}>
                        <TimeSeriesChart data={recentOrders} />
                    </div>
                    <div style={styles.flex}>                        
                        <TopPerformers
                            orders={topPerformers}
                            customers={topPerformersCustomers}
                        />
                        <Spacer />                        
                        <Card title="Upgrade Your Crowd" details="Pro Plan for better results"/>
                    </div>
                </div>
                <div style={styles.rightCol}>
                    <div style={styles.singleCol}>
                        <Meetings
                            orders={meetings}
                            customers={meetingsCustomers}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
