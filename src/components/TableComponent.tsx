import React from "react"
import { UNICODE_SYMBOLS, statusColors, type TableComponentPropType } from "../constants"

const TableComponent = ({ headers, data, handleOnClick }: TableComponentPropType) => {

    const tableCellBackground = (rowData: any, headerObj: any) => {
        if (headerObj?.key === 'status' || headerObj?.key === 'progress_status')
            return { style: { backgroundColor: statusColors[rowData['progress_status']] } }
    }

    return (
        <>
            <table border={1}>
                <tbody>
                    <tr>
                        {headers?.map((headerData, index) => (
                            <th key={index}>
                                {headerData?.label}
                            </th>
                        ))}
                    </tr>
                    {data?.map((rowData: any, index: number) => (
                        <tr key={index}>
                            {headers?.map((headerObj, index) => (
                                <React.Fragment key={index}>
                                    {headerObj?.key === 'control' ? (
                                        <td>
                                            <button onClick={() => handleOnClick(rowData?.actionKey)} >
                                                perform action
                                            </button>
                                        </td>
                                    ) : headerObj?.key === 'status' ? (
                                        <td {...tableCellBackground(rowData, headerObj)}>
                                            <>
                                                {UNICODE_SYMBOLS[rowData?.progress_status]}
                                            </>

                                        </td>
                                    ) :
                                        (
                                            headerObj?.key === 'result' ? (
                                                <td {...tableCellBackground(rowData, headerObj)}>
                                                    <div className="table_data_content">
                                                        {rowData[headerObj?.key]}
                                                    </div>
                                                </td>
                                            ) : (
                                                <td {...tableCellBackground(rowData, headerObj)}>
                                                    <div>
                                                        {rowData[headerObj?.key]}
                                                    </div>
                                                </td>
                                            )

                                        )}
                                </React.Fragment>
                            ))}
                        </tr>
                    ))}

                </tbody>

            </table >
        </>
    )
}
export default TableComponent