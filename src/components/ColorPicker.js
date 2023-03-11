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
                {i === activeColor && <Circle $backgroundColor={color} data-testid={`color-opt-${i}-active`} />}
            </ColorItem>
        )
    })
};

export default ColorPicker;