export const apiStatus: ApiStatus = {
    idle: "IDLE",
    pending: 'PENDING',
    success: 'SUCCESS',
    failure: 'FAILURE'
}

// status type declarations
export type IDLE = 'IDLE'
export type PENDING = 'PENDING'
export type SUCCESS = 'SUCCESS'
export type FAILURE = 'FAILURE'

export type MUL_STATUS = IDLE | PENDING | SUCCESS | FAILURE

type ApiStatus = {
    idle: IDLE,
    pending: PENDING,
    success: SUCCESS,
    failure: FAILURE
}

type StateType = {
    data: any,
    status: MUL_STATUS,
    employeeList?: any,
    employeeListStatus?: MUL_STATUS,
    employeeData?: any,
    employeeDataStatus?: MUL_STATUS
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
    handleOnClick: (key: string) => void
}


export const UNICODE_SYMBOLS: any = {
    IDLE: '',
    PENDING: '\u23F3',
    SUCCESS: '\u2714',
    FAILURE: '\u274C'
}
export const statusColors: any = {
    PENDING: 'orange',
    IDLE: 'grey',
    SUCCESS: 'green',
    FAILURE: 'red'
}

export const tableHeader = [
    { label: 'action', key: 'action' },
    { label: 'Result from API', key: 'result' },
    { label: 'status', key: 'status' },
    { label: 'Action Control', key: 'control' },
    { label: 'Progress Status', key: 'progress_status' }
]

export const tableData = [
    {
        action: 'check initial dispatch status',
        result: "",
        status: false,
        progress_status: "",
        actionKey: 'initDispatch',
        actionKeyStatus: apiStatus.idle
    },
    {
        action: 'check get all employee status',
        result: true,
        status: false,
        progress_status: "",
        actionKey: 'allEmployeeStatus',
        actionKeyStatus: apiStatus.idle
    },
    {
        action: 'check get employee data status',
        result: true,
        status: false,
        progress_status: "",
        actionKey: 'employeeData',
        actionKeyStatus: apiStatus.idle
    },
]

export const initialState: StateType = {
    data: {},
    status: apiStatus.idle,
    employeeList: {},
    employeeListStatus: apiStatus.idle,
    employeeData: {},
    employeeDataStatus: apiStatus.idle
}