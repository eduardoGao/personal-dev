import styled from 'styled-components'

const Title = styled.h1`
    font-size: 5em;
    color: ${({ theme }) => theme.colors.primary};
    padding: 3em;
`

export default function index() {
    return <Title>Hola</Title>
}
