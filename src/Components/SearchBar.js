// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import "../assets/css/SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

function SearchBar({ placeHolder, data }) {

    const [smartData, setSmartData] = useState([]);
    const [dataInput, setDataInput] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setDataInput(searchWord);

        var val = data.records
        const newFilter = val.filter((value) => {
            // La recherche s’applique sur les propriétés type_tournage, annee_tournage, ardt_lieu du dataset
            var dataSetFilter = [value.fields["type_tournage"].toLowerCase(), value.fields["annee_tournage"].toLowerCase(), value.fields["ardt_lieu"].toLowerCase()]

            return Object.keys(dataSetFilter).some(key =>
                dataSetFilter[key].toLowerCase().includes(searchWord.toLowerCase())
            );
        });


        if (searchWord === "") {
            setSmartData([]);
        } else {
            setSmartData(newFilter);
        }
    };

    const clearInput = () => {
        setSmartData([]);
        setDataInput("");
    };

    return (
        <div className="search">
            <div className="searchInput">
                <input type="text" placeholder={placeHolder} value={dataInput} onChange={handleFilter}></input>

                <div className="searchIcon">
                    {smartData.length === 0 ? (
                        <SearchIcon />
                    ) : (
                        <CloseIcon id="clearBtn" onClick={clearInput} />
                    )}
                </div>
            </div>
            {smartData.length !== 0 && (
                <div className="dataResult">
                    <br></br>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">Nom</TableCell>
                                    <TableCell align="right">Record ID</TableCell>
                                    <TableCell align="right">Record Time</TableCell>
                                    <TableCell align="right">Adresse</TableCell>
                                    <TableCell align="right">Arrondissement</TableCell>
                                    <TableCell align="right">Realisateur</TableCell>
                                    <TableCell align="right">Producteur</TableCell>
                                    <TableCell align="right">Type de tournage</TableCell>
                                    <TableCell align="right">Annee de tournage</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {smartData.map((row) => (
                                    <TableRow
                                        key={row.recordid}

                                    >

                                        <TableCell align="right">{row.fields.nom_tournage}</TableCell>
                                        <TableCell align="right">{row.recordid}</TableCell>
                                        <TableCell align="right">{row.record_timestamp}</TableCell>
                                        <TableCell align="right">
                                            <a href={"https://maps.google.com/?q=" + row.fields.coord_y + ',' + row.fields.coord_y} target="_blank" rel="noopener noreferrer">
                                                <p>{row.fields.adresse_lieu}</p>
                                            </a>
                                        </TableCell>
                                        <TableCell align="right">{row.fields.ardt_lieu}</TableCell>
                                        <TableCell align="right">{row.fields.nom_realisateur}</TableCell>
                                        <TableCell align="right">{row.fields.nom_producteur}</TableCell>
                                        <TableCell align="right">{row.fields.type_tournage}</TableCell>
                                        <TableCell align="right">{row.fields.annee_tournage}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

            )}
        </div>
    );
}

export default SearchBar;
