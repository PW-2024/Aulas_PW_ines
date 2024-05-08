import React, { useState } from 'react'
import { useFetchCatsQuery, useSubmitVoteMutation } from '../store/catAPI'
import styled from "styled-components";
import History from './History';
import { Link } from "react-router-dom";

const List = () => {
  const [pagination, setPage] = useState(0);
  const [showHistory, setShowHistory] = useState(false);
  const { data } = useFetchCatsQuery({ page: pagination, limit: 10 });
  const [submitVote] = useSubmitVoteMutation(); // Para submeter votos

  const decrementPage = () => {
    if (pagination > 0) {
      setPage(prevPagination => prevPagination - 1);
    }
  }
  const incrementPage = () => {
    setPage(prevPagination => prevPagination + 1);
  }

  const voteUpHandler = (id) => {
    submitVote({ image_id: id, sub_id: "inestorres1", value: 1 });
  }

  const voteDownHandler = (id) => {
    submitVote({ image_id: id, sub_id: "inestorres1", value: -1 });
  }

  const showHistoryVotes = () => {
    setShowHistory(true);
  }

  // votesData && console.log(votesData[0].image.url);

  return (
    <>
      <h1>The cat app</h1>
      <h2>Here you can find lots of cats</h2>
      <Link to={"/history"}><button onClick={showHistoryVotes}>History</button></Link>
      {showHistory && (
        <History />
      )}
      {!showHistory && (
        <CatsDiv>
          {data && data.map((cat) => {
            return <div key={cat.id} >
              <img src={cat.url} alt={`gatinho ${cat.id}`} />
              <br></br>
              <button onClick={() => { voteUpHandler(cat.id) }}>Vote Up</button>
              <button onClick={() => { voteDownHandler(cat.id) }}>Vote Down</button>
            </div>
          })}
        </CatsDiv>
      )}
      {!showHistory && (
        <PaginationStyle>
          <button onClick={decrementPage}>Previous</button>
          <p>{pagination}</p>
          <button onClick={incrementPage}>Next</button>
        </PaginationStyle>
      )}
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

const PaginationStyle = styled.div`
  margin-top: 50px;
  button {
    display: inline-block;
  }
  p {
    margin-left: 20px;
    margin-right: 20px;
    display: inline-block;
  }
`

export default List
