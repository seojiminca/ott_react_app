import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div`

`;


const DetailPresenter = ({result, loading, error}) => (
    loading ? (
        <Loader/>
    ) : (
        <Container>

        </Container>
    )

);

DetailPresenter.propTypes = {
    result: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default DetailPresenter;