import React from 'react'

/*
    columns: Array of objects with the following structure:
    dataColumns: Array of objects with the following structure:
*/

function 
TablaComponent ({
    columns,
    dataColumns
}) {
    console.log(dataColumns);
    console.log(dataColumns[0])
    console.log(dataColumns[0].name)
  return (
    <table>
        <thead>
            <tr>
                {
                    columns?.map((column) => {
                        return <th key={column.key}>{column.name}</th>
                    })
                }
            </tr>
        </thead>
        <tbody>
            {/* {
                dataColumns?.map(dataColumn => {
                    return (
                        dataColumn.map((column) => {
                            return <td key={column.key}>{column.name}</td>
                        })
                    )
                })
            } */}
        </tbody>
    </table>

  )
}

export default TablaComponent;
