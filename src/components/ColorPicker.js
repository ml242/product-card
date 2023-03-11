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
                onClick={() => setActiveColor(i)} 
                $backgroundColor={color} 
                $isActive={i === activeColor} 
            >
                {i === activeColor && <Circle $backgroundColor={color}/>}
            </ColorItem>
        )
    })
};

export default ColorPicker;