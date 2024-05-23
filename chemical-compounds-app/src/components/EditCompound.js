// src/components/EditCompound.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

function EditCompound() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [compound, setCompound] = useState({
        CompoundName: '',
        CompoundDescription: '',
        strImageSource: '',
        strImageAttribution: '',
    });

    useEffect(() => {
        fetchCompound();
    }, [id]);

    const fetchCompound = async () => {
        const response = await api.get(`/compounds/${id}`);
        setCompound(response.data);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCompound({ ...compound, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.put(`/compounds/${id}`, compound);
        navigate(`/compound/${id}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="CompoundName"
                    value={compound.CompoundName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Description:
                <textarea
                    name="CompoundDescription"
                    value={compound.CompoundDescription}
                    onChange={handleChange}
                />
            </label>
            <label>
                Image Source:
                <input
                    type="text"
                    name="strImageSource"
                    value={compound.strImageSource}
                    onChange={handleChange}
                />
            </label>
            <label>
                Image Attribution:
                <input
                    type="text"
                    name="strImageAttribution"
                    value={compound.strImageAttribution}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Save</button>
        </form>
    );
}

export default EditCompound;
