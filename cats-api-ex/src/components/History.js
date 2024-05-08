import React from 'react';
import { useFetchVotesQuery } from '../store/catAPI'
import styled from "styled-components";
import { Link } from "react-router-dom";

const History = () => {
    const { data: votesData, error: votesError } = useFetchVotesQuery({ sub_id: "inestorres1" }); // Para ir buscar o histórico de votos
    if (votesError) {
        console.error("Erro ao pedir os votos:", votesError);
    }
    return (
        <>
            <Link to={"/"}><button >Vote Cats</button></Link>

            <CatsDiv>
                {votesData && votesData.map((vote) => (
                    <img key={vote.image_id} src={vote.image.url} alt={`gatinho ${vote.image_id}`} style={vote.value === 1 ? { outline: "2px solid green" } : { outline: "2px solid red" }} />
                ))}
            </CatsDiv>
        </>
    )
}

const CatsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
`

export default History
