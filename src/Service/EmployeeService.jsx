import axios from "axios"

const Rest_Api_Base__url ='http://localhost:8082/api/employees';

export const listemployees = () => axios.get(Rest_Api_Base__url);