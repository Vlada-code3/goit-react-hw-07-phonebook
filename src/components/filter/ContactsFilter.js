import React from 'react'
import PropTypes from 'prop-types';
import { StyledContactFilter } from './ContactFilterStyled';


const ContactsFilter = ({ filter, setFilter }) => {
    return (
        <StyledContactFilter>
        <label >Filter:
            <input type="text"
                value={filter}
                onChange={setFilter}
            />
            </label>
        </StyledContactFilter>
    );
}

ContactsFilter.propTypes = {
    filter: PropTypes.string,
    setFilter: PropTypes.func,
}.isRequired;
export default ContactsFilter;