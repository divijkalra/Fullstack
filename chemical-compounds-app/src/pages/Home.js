// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import api from '../api';
import CompoundList from '../components/CompoundList';

function Home() {
    const [compounds, setCompounds] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const compoundsPerPage = 6;

    useEffect(() => {
        fetchCompounds();
    }, [currentPage]);

    const fetchCompounds = async () => {
        try {
            const response = await api.get(`/compounds?page=${currentPage}`);
            console.log("API Response:", response.data); // Add this line

            setCompounds(response.data);

        } catch (error) {
            console.error("Failed to fetch compounds:", error);
        }
    };
    const indexOfLastCompound = currentPage * compoundsPerPage;
    const indexOfFirstCompound = indexOfLastCompound - compoundsPerPage;
    const currentCompounds = compounds.slice(indexOfFirstCompound, indexOfLastCompound);
    const totalPages = Math.ceil(compounds.length / compoundsPerPage);
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <div className="container">
            <h1 className="center-heading">Compounds</h1>
            <CompoundList compounds={currentCompounds} />
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button key={i} onClick={() => handlePageClick(i + 1)}>
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Home;
