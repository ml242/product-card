import styled, { css } from 'styled-components'

const RowStyles = css`
    height: 3rem;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 0.5rem 0;
`;

const UlStyles = css`
    list-style-type: none;
    margin-block: 0;
    padding-inline: 0;
`;

const SharedNameStyles = css`
    align-self: center;
    font-size: 1.75rem;
    font-weight: 550;
`;

const PickerStyles = css`
    height: 3rem;
    cursor: pointer;
    display: flex;
    box-sizing: border-box;
`;

export const Card = styled.div`
    max-width: 32rem;
`;

export const Image = styled.img`
    max-width: 100%;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 0.5rem;
`;

export const OptionsContainer = styled.div``;

export const Details = styled.div`
    ${RowStyles}
    height: 2rem;
    padding: 0;
    justify-content: space-between;
`;
export const Subtitle = styled.div`
    ${RowStyles}
    height: 2rem;
    align-items: self-end;
    color: gray;
    font-size: 1.375rem;
    font-weight: 400;
`;

export const Name = styled.div`
    ${SharedNameStyles}
    letter-spacing: 0.05rem;
`;
export const Price = styled.div`
    ${SharedNameStyles}
`;

export const AbsorbencyContainer = styled.ul`
    ${RowStyles}
    ${UlStyles}
`;
export const ColorsContainer = styled.div`
    ${RowStyles}
    ${UlStyles}
`;

export const Variant = styled.li`
    ${PickerStyles}
    width: 7.5rem;
    border: ${props => props.$isActive ? `0.125rem solid black` : `0.125rem solid #cccccc`};
    justify-content: center;
    align-items: center;
    gap: 0.1rem;
`;

export const ColorItem = styled.li`
    ${PickerStyles}
    background: ${props => props.$backgroundColor && props.$backgroundColor};
    width: 3.25rem;
    border: ${props => props.$isActive ? `0.25rem solid black` : `0.25rem solid ${props.$backgroundColor}`};

    ${props => props.$isActive && `
        background-color: white;
        border: 0.15rem solid ${props.$backgroundColor};
    `}
`;

export const Circle = styled.div`
    height: 90%;
    width: 90%;
    border-radius: 50%;
    background: ${props => props.$backgroundColor && props.$backgroundColor};
    margin-left: 5%;
    align-self: center;
`;