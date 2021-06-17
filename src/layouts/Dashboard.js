import React from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import JobList from '../pages/JobList'
import Categories from './Categories'
import {Route} from 'react-router-dom';
import EmployerList from '../pages/EmployerList';
import CandidateList from '../pages/CandidateList';
import JobAdvertisementList from '../pages/JobAdvertisementList';
import AddJobAdvertisement from '../components/AddJobAdvertisement';

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}>
                    <Categories></Categories>
                    </Grid.Column>
                    <Grid.Column width={13}>
                    <Route exact path="/" component={JobList}/>
                    <Route exact path="/jobtitles" component={JobList}/>
                    <Route  path="/employerlists" component={EmployerList}/>
                    <Route  path="/candidatelists" component={CandidateList}/>
                    <Route  path="/jobadvertisementlists" component={JobAdvertisementList}/>
                    <Route  path="/addjobadvertisements" component={AddJobAdvertisement}/>
                    
                     </Grid.Column>
                </Grid.Row>
            </Grid> 
        </div>
    )
}
