import styled from '@emotion/styled'

interface BadgeComponentProps {
  label: string,
  backgroundColor?: string,
  textColor?: string,
  radius?: string,
}

interface FunctionProps {
  onClick?: () => void,
}

const BadgeComponent = (props : BadgeComponentProps & FunctionProps) => {
    console.log("BadgeComponent props", props);
    const { label, backgroundColor, textColor, radius, onClick } = props;
    
  return (
    <BadgeDiv
      tabIndex={0}
      role='button'
      onClick={onClick}
      backgroundColor={backgroundColor}
      textColor={textColor}
      radius={radius}
      label={label}
    >
        {label}
    </BadgeDiv>
  )
}

const BadgeDiv = styled.div <BadgeComponentProps>`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : 'red'};
    color: ${props => props.textColor ? props.textColor : 'white'};
    padding: 5px;
    border-radius: ${props => props.radius ? props.radius : '0px'};
    margin: 1%;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    margin-left: 5px;
    width: auto;
    cursor: pointer;
`;

export const Badge=BadgeComponent