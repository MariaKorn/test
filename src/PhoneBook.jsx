import React, {useState} from 'react';
import {Form} from './Form';

export const Phonebook = () => {
    const [formVisible, setFormVisible] = useState(false);

    return (
        <div>
            <h1>PhoneBook</h1>
            <button
                onClick={() => {
                    setFormVisible(!formVisible);
                }}>
                Add
            </button>
            {formVisible ? (
                <Form
                    data={{}}
                    onSave={(row) => console.log(row)}
                    onCancel={() => setFormVisible(false)}></Form>
            ) : null}
        </div>
    );
};
