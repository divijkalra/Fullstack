// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import api from '../api';
import CompoundList from '../components/CompoundList';

function Home() {
    const [compounds, setCompounds] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchCompounds();
    }, [currentPage]);

    const fetchCompounds = async () => {
        try {
            const response = await api.get(`/compounds?page=${currentPage}`);
            console.log("API Response:", response.data); // Add this line

            setCompounds(response.data);
            setTotalPages(response.data.length);
        } catch (error) {
            console.error("Failed to fetch compounds:", error);
        }
    };

    return (
        <div className="container">
            <h1>Compounds</h1>
            <CompoundList compounds={compounds} />
            <div>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button key={i} onClick={() => setCurrentPage(i + 1)}>
                        {i + 1}
                    </button>
                ))}
            </div>
        </div >
    );
}

export default Home;
