import React, { useState, useEffect } from "react";
import {  Table } from "semantic-ui-react";
import JobTitleService from "../services/jobTitleService";

export default function JobList() {

  const [jobLists, setJobLists] = useState([]);

 useEffect(()=>{
     let jobTitleService= new JobTitleService()
     jobTitleService.getJobTitles().then(results=> setJobLists(results.data.data))
 },[])
  return (
    <div>
        <Table celled>
        <Table.Header> 
          <Table.Row>
          <Table.HeaderCell>Title Name</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobLists.map((jobList) => (
            <Table.Row key={jobList.id}>
                 <Table.Cell>{jobList.titleName}</Table.Cell>
              <Table.Cell >{jobList.description}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}
