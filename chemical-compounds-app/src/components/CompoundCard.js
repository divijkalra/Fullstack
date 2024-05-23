// src/components/CompoundCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function CompoundCard({ compound }) {
    return (
        <div className="compound-card">
            <img src={compound.strImageSource} alt={compound.CompoundName} />
            <h2>{compound.CompoundName}</h2>
            <Link to={`/compound/${compound.id}`}>View Details</Link>
        </div>
    );
}

export default CompoundCard;
