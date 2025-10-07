type ApiStatus = {
    idle: 'IDLE',
    pending: 'PENDING',
    success: 'SUCCESS',
    failure: 'FAILURE'
}

type StateType = {
    data: any,
    status: 'IDLE' | 'PENDING' | 'SUCCESS' | 'FAILURE',
    employeeList?: any,
    employeeListStatus?: 'IDLE' | 'PENDING' | 'SUCCESS' | 'FAILURE'
}

export type ReturnType = {
    name: string,
    place: string,
    city: string,
    mobile: number
}

export type EmployeeType = {
    id: number,
    employee_name: string,
    employee_salary: number,
    employee_age: number,
    profile_image: string
}


export const apiStatus: ApiStatus = {
    idle: 'IDLE',
    pending: 'PENDING',
    success: 'SUCCESS',
    failure: 'FAILURE'
}


export const initialState: StateType = {
    data: {},
    status: apiStatus.idle,
    employeeList: {},
    employeeListStatus: apiStatus.idle
}