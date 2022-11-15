import React from "react";
import { DASHBOARD_API_URL } from "../constants";
import axios from 'axios';
import Header from "../components/Common/Header";
import Tabs from "../components/Dashboard/Tabs/tabs";

function DashboardPage() {

    const [data, setData] = React.useState([]);


    React.useEffect(() => {


        axios
            .get(DASHBOARD_API_URL)
            .then((response) => {
                console.log('Response Data >>>', response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.log('Error>>>', error)
            })


    }, []);



    return (<div>
        <Header />
        <Tabs data={data} />
    </div>
    )
}


export default DashboardPage;