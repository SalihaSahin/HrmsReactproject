import React, { useState, useEffect } from "react";
import {  Table } from "semantic-ui-react";
import JobTitleService from "../services/jobTitleService";
import { Button, Card, Image } from 'semantic-ui-react'

export default function JobList() {

  const [jobLists, setJobLists] = useState([]);

 useEffect(()=>{
     let jobTitleService= new JobTitleService()
     jobTitleService.getJobTitles().then(results=> setJobLists(results.data.data))
 },[])
  return (
    <div>
      
      <Card.Group>
      {jobLists.map((jobList) => (
    <Card> 
      <Card.Content key ={jobList.id}>
        <Card.Header>{jobList.titleName}</Card.Header>
        <Card.Meta>{jobList.description}</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            İncele
          </Button>
          
        </div>
      </Card.Content>
      
    </Card>
      ))}
  </Card.Group>
  
    </div>
  )
}
