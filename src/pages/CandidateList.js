import React,{ useState ,useEffect} from "react";
import {  Table } from "semantic-ui-react";
import CandidateService from "../services/candidateService";


export default function CandidateList() {

    const[candidates,setCandidates]=useState([]);

    useEffect(()=>{
        let candidateService= new CandidateService()
        candidateService.getCandidates().then(result=>setCandidates(result.data.data))
    },[])    
    return (
        <div>
            <Table celled>
        <Table.Header> 
          <Table.Row>
          <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>LastName</Table.HeaderCell>
            <Table.HeaderCell>Nationality Id</Table.HeaderCell>
            <Table.HeaderCell>Date Of Birth</Table.HeaderCell>
            <Table.HeaderCell>Picture Url</Table.HeaderCell>
            <Table.HeaderCell>Is Active</Table.HeaderCell>
            <Table.HeaderCell>Is Email Verified</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {candidates.map((candidate) => (
            <Table.Row key={candidate.id}>
                 <Table.Cell>{candidate.email}</Table.Cell>
              <Table.Cell>{candidate.firstName}</Table.Cell>
              <Table.Cell>{candidate.lastName}</Table.Cell>
              <Table.Cell>{candidate.nationalityId}</Table.Cell>
              <Table.Cell>{candidate.dateOfBirth}</Table.Cell>
              <Table.Cell>{candidate.pictureUrl}</Table.Cell>
              <Table.Cell>
                {candidate.isActive ? "Active" : "Not Active"}
              </Table.Cell>
              <Table.Cell>
                {candidate.isEmailVerified
                  ? "Verified By Email"
                  : "Not Verified Yet"}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
        
    )
}
