import axios from "axios";
import React, { useState ,useEffect} from "react";
import { CardDescription, Form , Segment} from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";

  

export default function AddJobAdvertisement() {
    const [addJobAdvertisements, setAddJobAdvertisements]= useState({})
    
    return (
    <div>
       
        <Segment inverted>
      <Form inverted>
        <Form.Group widths="equal">
          <Form.TextArea
            fluid
            label="Description"
            placeholder="Tell us more about you..."
            name="description"
          />
        </Form.Group>
        <Form.Group  widths="equal">
          <Form.Input label="Minimum Salary" placeholder="min salary.." />
          <Form.Input label="Maximum Salary" placeholder="max salary.." />
          <Form.Input
            label="Number of Poisition"
            placeholder="number of position.."
          ></Form.Input>
          <Form.Input
            label="AppelDeadline"
            calendar
          ></Form.Input>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Select label="City" placeholder="city" />
          <Form.Field label='Working Place Type' control='select'>
        <option value='workingplace'>WorkingPlace</option>
        <option value='remote'>Remote</option>
      </Form.Field>
      <Form.Field label='Working Time Type' control='select'>
        <option value='fulltime'>Full Time</option>
        <option value='parttime'>Part Time</option>
      </Form.Field>
        </Form.Group>
        <Form.Checkbox label="I agree to the Terms and Conditions" />

        <Form.Button >Submit</Form.Button>
      </Form> 
</Segment>

    </div>
  );
}
