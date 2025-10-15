import React from "react"
import { statusColors, type TableComponentPropType } from "../constants"

const TableComponent = ({ headers, data, handleOnClick }: TableComponentPropType) => {

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
                                        <td style={{ backgroundColor: (statusColors[rowData['progress_status']]) }}>
                                            {rowData[headerObj?.key] === true &&
                                                <>
                                                    &#x2713;
                                                </>
                                            }
                                        </td>
                                    ) :
                                        (
                                            <td>
                                                <div>
                                                    {rowData[headerObj?.key]}
                                                </div>
                                            </td>
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