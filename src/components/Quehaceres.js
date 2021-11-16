import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'reactstrap'
import { Add } from './Add'
import { List } from './List'

const initialState = [];

export const Quehaceres = () => {

    const [tasks, setTasks] = useState(initialState)

    const createTask = (data) => {
        data.done = false;
        setTasks([
            ...tasks,
            data
        ]);
    }

    const updateTask = (data, i) => {
        const newTasks = [...tasks];
        newTasks.splice(i, 1, data);
        setTasks([
            ...newTasks,
        ]);
    }

    const deleteTask = (e, i) => {
        setTasks(tasks.filter((e, indice) => indice !== i));
    }

    return (
        <>
            <Row>
                <Col md={{ offset: 3, size: 6 }} sm="12">
                    <List tasks={ tasks } deleteTask={ deleteTask } updateTask={ updateTask }/>
                </Col>
            </Row>
            <Row>
                <Col md={{ offset: 3, size: 6 }} sm="12">
                    <Add createTask={ createTask }/>
                </Col>
            </Row>
        </>
    )
}
