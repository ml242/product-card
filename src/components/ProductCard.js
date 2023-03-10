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

const AbsorbencyPicker = styled.div`
    ${row}
`;
const ColorPicker = styled.div`
    ${row}
`;

const Button = styled.input.attrs({ 
    type: 'button',
  })`
    background-color: none;
    padding: 0;
    cursor: pointer;
`;

const ProductCard = () => {
    const product = products[0];
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
                        return <Button key={i} value={`Absorbency Level ${item}`} /> 
                    })}
                </AbsorbencyPicker>
                <ColorPicker>
                    {product.options.colors.map((item, i) => {
                        return <Button key={i} value={`color opt ${item}`}/>
                    })}
                </ColorPicker>
            </Options>
        </Card>
    )
};

export default ProductCard;