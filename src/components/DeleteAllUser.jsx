import React from 'react'
import styled from 'styled-components'
import { clearAllUsers } from '../store/slices/UserSlice'
import { useDispatch } from 'react-redux'

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deleteUsers = () => {
    dispatch(clearAllUsers());
  }

  return <Wrapper>
    <button className="btn clear-btn" onClick={deleteUsers}>Clear Users</button>
  </Wrapper>
}

const Wrapper = styled.section`
  .clear-btn{
    text-transform: capitalize;
    background-color: #db338e;
    margin-top: 3rem;
  }
`

export default DeleteAllUser
