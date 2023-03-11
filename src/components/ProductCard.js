import { useState } from 'react';
import styled, { css } from 'styled-components'
import Droplet from "./Droplet";

import { products } from "../api/products";

const RowStyles = css`
    height: 3rem;
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 0.75rem;
    padding: 0.5rem 0;
`;

const UlStyles = css`
    list-style-type: none;
    margin-block: 0;
    padding-inline: 0;
`;

const SharedNameStyles = css`
    align-self: center;
    font-size: 1.5rem;
    font-weight: 700;
`;

const Card = styled.div`
    max-width: 30rem;
    display: flex;
    flex-direction: column;
`;

const Image = styled.img`
    width: 100%;
`;

const Description = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
`;


const Options = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Details = styled.div`
    ${RowStyles}
    height: 2rem;
    justify-content: space-between;
`;
const Subtitle = styled.div`
    ${RowStyles}
    height: 2rem;
    align-items: self-end;
    color: gray;
    font-size: 1.25rem;
    font-weight: 400;
`;

const Name = styled.div`
    ${SharedNameStyles}
    letter-spacing: 0.1rem;
`;
const Price = styled.div`
    ${SharedNameStyles}
`;

const AbsorbencyPicker = styled.ul`
    ${RowStyles}
    ${UlStyles}
`;
const ColorPicker = styled.div`
    ${RowStyles}
    ${UlStyles}
`;

const VariantPicker = styled.li`
    cursor: pointer;
    height: 100%;
    width: 7rem;
    border: ${props => props.$isActive ? `0.15rem solid black` : `0.15rem solid gray`};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ColorItem = styled.li`
    display: flex;
    background: ${props => props.$backgroundColor && props.$backgroundColor};
    cursor: pointer;
    height: 100%;
    width: 3rem;
    border: ${props => props.$isActive ? `0.15rem solid black` : `0.15rem solid ${props.$backgroundColor}`};

    ${props => props.$isActive && `
        background-color: white;
        border: 0.15rem solid ${props.$backgroundColor};
    `}
`;

const Circle = styled.div`
    height: 90%;
    width: 90%;
    border-radius: 50%;
    background: ${props => props.$backgroundColor && props.$backgroundColor};
    margin-left: 5%;
    align-self: center;
`;

const ProductCard = () => {
    const product = products[0];
    const [activeColor, setActiveColor] = useState(0);
    const [activeVariant, setActiveVariant] = useState(0);

    return (
        <Card>
            <Image src={product.image.url} alt={product.image.alt} />
            <Description>
                <Subtitle>collection</Subtitle>
                <Details>
                    <Name>{product.name}</Name>
                    <Price>${`${product.price}`}</Price>
                </Details>
            </Description>
            <Options>
                <AbsorbencyPicker>
                    {product.options.absorbency.map((j, i) => {
                        return (
                            <VariantPicker 
                                key={i}
                                $isActive={i === activeVariant}
                                onClick={() => setActiveVariant(i)}
                            >
                                {[...Array(5)].map((k, index) => <Droplet isFilled={index + 1 <= j} width={15} />)}
                            </VariantPicker>
                        )
                    })}
                </AbsorbencyPicker>
                <ColorPicker>
                    {product.options.colors.map((color, i) => {
                        return (
                            <ColorItem 
                                key={i} 
                                onClick={() => setActiveColor(i)} 
                                $backgroundColor={color} 
                                $isActive={i === activeColor} 
                            >
                                {i === activeColor && <Circle $backgroundColor={color}/>}
                            </ColorItem>
                        )
                    })}
                </ColorPicker>
            </Options>
        </Card>
    )
};

export default ProductCard;