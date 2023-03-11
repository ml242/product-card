import { useState } from 'react';
import ColorPicker from './ColorPicker';
import VariantPicker from './VariantPicker';

import {
    Card,
    Image,
    Description,
    OptionsContainer,
    Details,
    Subtitle,
    Name,
    Price,
    AbsorbencyContainer,
    ColorsContainer,
} from './styles';

const ProductCard = ({ product }) => {
    const [activeColor, setActiveColor] = useState(0);
    const [activeVariant, setActiveVariant] = useState(0);

    return (
        <Card>
            <Image src={product.image.url} alt={product.image.alt} />
            <Description>
                <Subtitle>collection</Subtitle>
                <Details>
                    <Name>{product.name}</Name>
                    <Price>${product.price}</Price>
                </Details>
            </Description>
            <OptionsContainer>
                <AbsorbencyContainer>
                    <VariantPicker 
                        activeVariant={activeVariant}
                        setActiveVariant={setActiveVariant}
                        absorbencyVariants={product.options.absorbencyVariants}
                    />
                </AbsorbencyContainer>
                <ColorsContainer>
                    <ColorPicker
                        activeColor={activeColor} 
                        colors={product.options.colors} 
                        setActiveColor={setActiveColor}
                    />
                </ColorsContainer>
            </OptionsContainer>
        </Card>
    )
};

export default ProductCard;