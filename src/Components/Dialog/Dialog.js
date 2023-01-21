import React from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Dialog } from '@material-ui/core'
import { DialogActions } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { useState } from 'react';
import Axios from 'axios';

export default function FormDialog(props) {
    const [editValues, setEditValues] = useState({
        id: props.id,
        name: props.name,
        cost: props.cost,
        category: props.category,
    });

    const handleEditGame = () => {
        Axios.put("http://localhost:3001/edit", {
            id: editValues.id,
            name: editValues.name,
            cost: editValues.cost,
            category: editValues.category,
        });
        handleClose();
    };

    const handleDeleteGame = () => {
        Axios.delete(`http://localhost:3001/delete/${editValues.id}`);
        handleClose();
    }

    const handleClickOpen = () => {
        props.setOpen(true);
    }

    const handleClose = () => {
        props.setOpen(false);
    }

    const handleChangesValues = (value) => {
        setEditValues((prevValues) => ({
            ...prevValues,
            [value.target.id]: value.target.value,
        }));
    };
    return (
        <>
            {/*<Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open form Dialog
            </Button>
        */}
            <Dialog
                open={props.open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Editar</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Nome do jogo"
                        defaultValue={props.name}
                        onChange={handleChangesValues}
                        type="text"
                        fullwidth
                    />
                    <TextField
                        autoFocus margin="dense"
                        id="cost"
                        label="Preço"
                        defaultValue={props.cost}
                        onChange={handleChangesValues}
                        type="text"
                        fullwidth
                    />
                    <TextField
                        autoFocus margin="dense"
                        id="category"
                        label="Categoria"
                        defaultValue={props.category}
                        onChange={handleChangesValues}
                        type="text"
                        fullwidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDeleteGame} color="primary">
                        Excluir
                    </Button>
                    <Button onClick={handleEditGame} color="primary">
                        Salvar
                    </Button>
                </DialogActions>
            </Dialog>
        </>

    )
}