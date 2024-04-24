import styled from 'styled-components'

export const LayoutContainer = styled.div`
    max-width: 74rem;
    height: calc(100vh - 5rem);
    margin: 2.5rem auto;
    border-radius: 8px;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme['gray-800']};
`