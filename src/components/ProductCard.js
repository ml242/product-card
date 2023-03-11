import { useState } from 'react';
import styled, { css } from 'styled-components'
import Droplet from "./Droplet";

import { products } from "../api/products";

const RowStyles = css`
    height: 3rem;
    display: flex;
    flex-direction: row;
    width: 100%;
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
    font-weight: 500;
`;

const Card = styled.div`
    max-width: 32rem;
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
    padding-bottom: 0.5rem;
`;


const Options = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Details = styled.div`
    ${RowStyles}
    padding: 0;
    height: 2rem;
    justify-content: space-between;
`;
const Subtitle = styled.div`
    ${RowStyles}
    height: 2.25rem;
    align-items: self-end;
    color: gray;
    font-size: 1.35rem;
    font-weight: 500;
`;

const Name = styled.div`
    ${SharedNameStyles}
    letter-spacing: 0.05rem;
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
    width: 7.5rem;
    border: ${props => props.$isActive ? `0.15rem solid black` : `0.15rem solid #cccccc`};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.1rem;
    box-sizing: border-box;
`;

const ColorItem = styled.li`
    display: flex;
    background: ${props => props.$backgroundColor && props.$backgroundColor};
    cursor: pointer;
    height: 3.25rem;
    width: 3.25rem;
    border: ${props => props.$isActive ? `0.15rem solid black` : `0.15rem solid ${props.$backgroundColor}`};
    box-sizing: border-box;

    ${props => props.$isActive && `
        background-color: white;
        border: 0.15rem solid ${props.$backgroundColor};
    `}
`;

const Circle = styled.div`
    height: 95%;
    width: 95%;
    border-radius: 50%;
    background: ${props => props.$backgroundColor && props.$backgroundColor};
    margin-left: 2.5%;
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
                                {[...Array(5)].map((k, index) => <Droplet isFilled={index + 1 <= j} width={12} />)}
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