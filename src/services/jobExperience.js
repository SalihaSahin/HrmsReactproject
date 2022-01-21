import axios from "axios";

export default class JobExperience{
    getJobExperience(){
        return axios.get("http://localhost:8080/api/jobexperiences/getall")
    }
} 