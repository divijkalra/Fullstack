import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

function CompoundDetails() {
    const { id } = useParams();
    const [compound, setCompound] = useState(null);

    useEffect(() => {
        fetchCompound();
    }, [id]);

    const fetchCompound = async () => {
        try {
            const response = await api.get(`/compounds/${id}`);
            console.log("API Response:", response.data);
            setCompound(response.data);
        } catch (error) {
            console.error("Failed to fetch compound details:", error);
        }
    };

    if (!compound) return <div>Loading...</div>;

    return (
        <div className="container compound-details">
            <h1>{compound.CompoundName}</h1> 
            <div className="compound-image-wrapper">
                <img src={compound.strImageSource} alt={compound.CompoundName}  />
            </div>           
           <p>{compound.CompoundDescription}</p>
            <p>
                <strong>Image Attribution:</strong>
                <a
                    href={compound.strImageAttribution}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue' }}
                >
                    {compound.strImageAttribution}
                </a>
            </p>

        </div>
    );
}

export default CompoundDetails;
