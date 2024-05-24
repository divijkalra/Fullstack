// src/pages/CompoundPage.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api';
import CompoundDetails from '../components/CompoundDetails';

function CompoundPage() {
    const { id } = useParams();
    const [compound, setCompound] = useState(null);

    useEffect(() => {
        fetchCompound();
    }, [id]);

    const fetchCompound = async () => {
        const response = await api.get(`/compounds/${id}`);
        setCompound(response.data);
    };

    return (
        <div className="compound-page-container">
            {compound ? (
                <div className="compound-details-container">
                    <CompoundDetails compound={compound} />
                    <Link to={`/compound/${id}/edit`} className="edit-link">Edit</Link>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default CompoundPage;
