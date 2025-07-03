import React, { useState } from 'react';
import {
    Modal,
    Box,
    Typography,
    TextField,
    Button,
} from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 360,
    bgcolor: '#13131C',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
};

const inputStyle = {
    mb: 2,
    '& .MuiOutlinedInput-root': {
        borderRadius: '30px',
        background: 'rgba(255,255,255,0.03)',
        color: '#fff',
    },
    '& input': {
        color: '#fff',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#2e2e3c',
    },
};

const AddBankAccountModal = ({ open, onClose, onSubmit }) => {
    const [form, setForm] = useState({
        holder: '',
        account: '',
        confirmAccount: '',
        ifsc: '',
        bankName: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (form.account !== form.confirmAccount) {
            alert('Account number does not match');
            return;
        }
        onSubmit(form);
        onClose();
        setForm({
            holder: '',
            account: '',
            confirmAccount: '',
            ifsc: '',
            bankName: '',
        });
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={style}>
                <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>
                    Add Your Bank
                </Typography>
                <Typography variant="body2" sx={{ color: '#aaa', mb: 2 }}>
                    Securely link your bank account to start withdrawing your earnings.
                </Typography>

                <TextField
                    fullWidth
                    name="holder"
                    placeholder="Account Holder"
                    value={form.holder}
                    onChange={handleChange}
                    sx={inputStyle}
                />
                <TextField
                    fullWidth
                    name="account"
                    placeholder="Account"
                    value={form.account}
                    onChange={handleChange}
                    sx={inputStyle}
                />
                <TextField
                    fullWidth
                    name="confirmAccount"
                    placeholder="Confirm Account No"
                    value={form.confirmAccount}
                    onChange={handleChange}
                    sx={inputStyle}
                />
                <TextField
                    fullWidth
                    name="ifsc"
                    placeholder="IFSC Code"
                    value={form.ifsc}
                    onChange={handleChange}
                    sx={inputStyle}
                />
                <TextField
                    fullWidth
                    name="bankName"
                    placeholder="Bank Name"
                    value={form.bankName}
                    onChange={handleChange}
                    sx={inputStyle}
                />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                    <Button
                        variant="outlined"
                        onClick={onClose}
                        sx={{
                            color: '#fff',
                            borderColor: '#444',
                            borderRadius: '30px',
                            px: 4,
                            textTransform: 'none',
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        sx={{
                            backgroundColor: '#7C39F6',
                            color: 'white',
                            textTransform: 'none',
                            fontSize: '1rem',
                            padding: '12px 25px',
                            borderRadius: '30px',
                            boxShadow: `inset 0 2.91px 6px #FFFFFF61, inset 0 -2.91px 6px #FFFFFF61`,
                            '&:hover': { backgroundColor: '#8C31F1' },
                        }}
                    >
                        Submit Details
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default AddBankAccountModal;
