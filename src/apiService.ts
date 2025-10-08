import axios from 'axios'
class ApiServices {
    getEmployeeList() {
        return axios.get('https://dummy.restapiexample.com/api/v1/employees')
    }
    getEmployee(id: number) {
        return axios.get('https://dummy.restapiexample.com/api/v1/employee/' + id)
    }
}
export default new ApiServices()