import { array, func, number } from 'prop-types';

import {
    Circle,
    ColorItem,
} from './styles';

const ColorPicker = ({ 
    activeColor, 
    colors, 
    setActiveColor,
}) => {
    return colors.map((color, i) => {
        return (
            <ColorItem 
                key={i}
                data-testid={`color-opt-${i}`}
                onClick={() => setActiveColor(i)} 
                $backgroundColor={color} 
                $isActive={i === activeColor} 
            >
                <Circle 
                    $backgroundColor={color} 
                    $isActive={i === activeColor} 
                    data-testid={`color-opt-${i}-active`} 
                />
            </ColorItem>
        )
    })
};

ColorPicker.propTypes = {
    activeColor: number.isRequired,
    colors: array.isRequired,
    setActiveColor: func,
};

ColorPicker.defaultProps = {
    activeColor: 0,
    colors: ['black'],
};

export default ColorPicker;