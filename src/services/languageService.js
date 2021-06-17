import axios from "axios";

export default class LanguagesService{
    getLanguages(params){
        return axios.get( `http://localhost:8080/api/jobtitles/getall?candidateId=${params}` )
    }
}