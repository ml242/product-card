import { array, func, number } from 'prop-types';

import Droplet from './Droplet';
import { Variant } from './styles';

const VariantPicker = ({ activeVariant, setActiveVariant, absorbencyVariants }) => {
    return absorbencyVariants.map((j, i) => {
        return (
            <Variant 
                key={i}
                data-testid={`variant-opt-${i}`} 
                $isActive={i === activeVariant}
                onClick={() => setActiveVariant(i)}
            >
                {[...Array(5)].map((k, index) => <Droplet key={index} isFilled={index + 1 <= j} width={12} />)}
            </Variant>
        )
    })
};

VariantPicker.propTypes = {
    activeVariant: number.isRequired,
    absorbencyVariants: array.isRequired,
    setActiveVariant: func,
};

VariantPicker.defaultProps = {
    activeVariant: 0,
    absorbencyVariants: [4],
};

export default VariantPicker;