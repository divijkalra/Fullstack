// src/components/CompoundList.js
import React from 'react';
import CompoundCard from './CompoundCard';

function CompoundList({ compounds }) {
    console.log("Compounds in CompoundList:", compounds); // Log compounds data
    return (
        <div className="compound-list container">
            {compounds && compounds.length > 0 ? (
                compounds.map((compound) => (
                    <CompoundCard key={compound.id} compound={compound} />
                ))
            ) : (
                <p>No compounds available.</p>
            )}
        </div>
    );
}

export default CompoundList;
