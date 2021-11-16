import React from 'react'
import { Button, Input, Table } from 'reactstrap'

export const List = ({ tasks, updateTask, deleteTask }) => {

    const handleCheckbox = (i, task, done) => {
        task.done = done;
        updateTask(task, i);
    }


    return (
        <Table borderless size="">
            <thead>
                <tr>
                    <th style={{ width: '500px' }}></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    tasks.map((item, i) => {
                        return <tr key={ i }>
                                    { !item.done && <td>{ item.task }</td> }
                                    { item.done && <td><span>{ item.task }</span></td> }
                                    <td><Input type="checkbox" checked={ item.done } onChange={ e => handleCheckbox(i, item, e.target.checked)}/></td>
                                    <td><Button color='danger' size="sm" onClick={e => deleteTask(e, i)}>Delete</Button></td>
                                </tr>
                    })
                }
            </tbody>
        </Table>
    )
}
