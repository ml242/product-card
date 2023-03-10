import { useState } from 'react';
import styled, { css } from 'styled-components'

import { products } from "../api/products";

const row = css`
    height: 2.5rem;
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 1rem;
    padding: 0.5rem 0;
    box-sizing: border-box;
`;

const ul = css`
    list-style-type: none;
    margin-block: 0;
    padding-inline: 0;
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


const Options = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Details = styled.div`
    ${row}
    justify-content: space-between;
`;
const Subtitle = styled.div`
    ${row}
`;
const Name = styled.div``;
const Price = styled.div``;

const AbsorbencyPicker = styled.ul`
    ${row}
    ${ul}
`;
const ColorPicker = styled.div`
    ${row}
    ${ul}
`;

const Item = styled.li`
    cursor: pointer;
`;

const ColorItem = styled.li`
    display: flex;
    background: ${props => props.$backgroundColor && props.$backgroundColor};
    cursor: pointer;
    height: 2.85rem;
    width: 2.85rem;
    border: ${props => props.$isActive ? `0.15rem solid black` : `0.15rem solid ${props.$backgroundColor}`};

    ${props => props.$isActive && `
        background-color: white;
        border: 0.15rem solid black;
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

    return (
        <Card>
            <Image src={product.image.url} alt={product.image.alt} />
            <Description>
                <Subtitle>Collection</Subtitle>
                <Details>
                    <Name>{product.name}</Name>
                    <Price>${`${product.price}`}</Price>
                </Details>
            </Description>
            <Options>
                <AbsorbencyPicker>
                    {product.options.absorbency.map((item, i) => {
                        return (
                            <Item 
                                key={i}
                            >
                                {`Absorbency Level ${item}`}
                            </Item>
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