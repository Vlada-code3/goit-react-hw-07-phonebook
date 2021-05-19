import React from 'react'
import { StyledSection } from './SectionStyled';

const Section = ({title, children, style}) => {
    return (
        
        <StyledSection >
            <h2>{title}</h2>
            {children}
            
        </StyledSection>
    );
}

export default Section;