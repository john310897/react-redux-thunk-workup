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

export type TableComponentPropType = {
    headers: any[],
    data: any,
    apiStatus: string,
    handleOnClick: () => void
}

export const statusColors: any = {
    PENDING: 'orange',
    IDLE: 'grey',
    SUCCESS: 'green',
    FAILURE: 'red'
}

export const tableHeader = [
    { label: 'action', key: 'action' },
    { label: 'result', key: 'result' },
    { label: 'status', key: 'status' },
    { label: 'control', key: 'control' },
    { label: 'progress status', key: 'progress_status' }
]

export const tableData = [
    { action: 'check api status', result: true, status: true, progress_status: true },
    { action: 'check get employee status', result: true, status: true, progress_status: true },
    { action: 'check get employee data status', result: true, status: true, progress_status: true },
]

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