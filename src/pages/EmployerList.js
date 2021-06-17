import React,{useEffect, useState} from 'react'
import {  Table } from "semantic-ui-react";
import EmployerService from '../services/employerService';


export default function EmployerList() {
    
    const [employers,setEmployers]=useState([])

    useEffect(()=>{
        let employerService= new EmployerService()
        employerService.getEmployers().then(results=>setEmployers(results.data.data))
    },[])

    return (
        <div>
            <Table celled >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>WebSite</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Is Active</Table.HeaderCell>
            <Table.HeaderCell>Is Verified</Table.HeaderCell>
            <Table.HeaderCell>Is Verified By Employee</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
 <Table.Body >
        { employers.map((employer) => (

            <Table.Row key={employer.id}>
              <Table.Cell>{employer.email}</Table.Cell>
              <Table.Cell>{employer.webSite}</Table.Cell>
              <Table.Cell>{employer.phoneNumber}</Table.Cell>
              <Table.Cell>{employer.companyName}</Table.Cell>
              <Table.Cell>{employer.isActive ? "Active" : "Not Active"}</Table.Cell>
              <Table.Cell>{employer.isEmailVerified ? "Verified By Email" : "Not Verified Yet"}</Table.Cell>
              <Table.Cell>{employer.isVerifiedByEmlopyee ? "Verified By Employee" : "Not Verified Yet"}</Table.Cell>
            </Table.Row>
        

  )) }  
        </Table.Body>
      </Table>
        </div>
    )
}
