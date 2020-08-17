import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Modal, Input, InputLabel } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useState } from 'react';
import db from './firebase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


function Todo(props) {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    const handleOpen = () => {
        setOpen(true);
    }

    const updateTodo = () => {
        // Update todo with new input text
        db.collection('todo').doc(props.todo.id).set({
            task: input
        }, { merge: true });
        setOpen(false);
    }


    return (
        <>
            <Modal open={open} onClose={e => setOpen(false)}>
                <form>
                    <div className={classes.paper}>
                        <h1>Edit the Task</h1>
                        <InputLabel>Old Info = {props.todo.todo}</InputLabel>
                        <Input value={input} onChange={(event) => setInput(event.target.value)} />
                        <Button onClick={updateTodo}>Update</Button>
                    </div>
                </form>
            </Modal>

            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar /> 
                    </ListItemAvatar>
                    <ListItemText primary={props.todo.todo} secondary='Edit or Delete Items 👉'/>
                    {/*^ props.todo is from App.js 'todo=' and another todo is collection which will be break down after going into App.js */}
                    <Button onClick={e => setOpen(true)}>Edit</Button>
                    <Button color="primary"><DeleteIcon onClick={event => db.collection('todo').doc(props.todo.id).delete()} /></Button>
                </ListItem>

            </List>

        </>
    )
}

export default Todo
