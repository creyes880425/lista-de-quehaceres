import React from 'react'
import { useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Row } from 'reactstrap';

const initialState={
    task: '',
    done: false
}

export const Add = ({ createTask }) => {

    const [inputs, setInputs] = useState(initialState);

    const inputsUpdate = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const save = (e) => {
        e.preventDefault();
        createTask(inputs);
        setInputs(initialState);
    }

    return (
        <Row>
            <Form onSubmit={save}>
                <Row>
                    <Col xs={6}>
                        <FormGroup>
                            <Input type="text" required name="task" value={inputs.task} onChange={inputsUpdate}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button color="primary" style={{ padding: '5px 60px' }} type="submit">Add</Button>
                    </Col>
                </Row>
            </Form>
        </Row>
    )
}
