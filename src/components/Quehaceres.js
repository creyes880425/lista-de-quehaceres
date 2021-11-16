import React from 'react'
import { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap'
import { Add } from './Add'
import { List } from './List'

const initialState = [];

export const Quehaceres = () => {

    const [tasks, setTasks] = useState(initialState)

    useEffect(() => {
        const localTask = JSON.parse(localStorage.getItem('tasks'));
        console.log(localTask);
        if (localTask !== null) {
            setTasks(localTask);
        }
    }, [])

    const createTask = (data) => {
        data.done = false;
        setTasks([
            ...tasks,
            data
        ]);
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    const updateTask = (data, i) => {
        const newTasks = [...tasks];
        newTasks.splice(i, 1, data);
        setTasks([
            ...newTasks,
        ]);
        localStorage.setItem('tasks', JSON.stringify(newTasks))
    }

    const deleteTask = (e, i) => {
        const filterTasks = tasks.filter((e, indice) => indice !== i);
        setTasks(filterTasks);
        localStorage.setItem('tasks', JSON.stringify(filterTasks))
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
