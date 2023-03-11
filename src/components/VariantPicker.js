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

export default VariantPicker;