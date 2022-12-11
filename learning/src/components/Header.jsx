import PropTypes from 'prop-types';

// made to learn PropTypes and defaultProps

const Header = ({bgColor,textColor,text})=>{
    const style = {
        backgroundColor: bgColor,
        color: textColor
    }
    return(
        <>
            <p style={style}>
                {text}
            </p>
        </>
    )
}

Header.defaultProps = {
    bgColor:'green',
    textColor:'black',
}

Header.propTypes = {
    text : PropTypes.string.isRequired,
    bgColor : PropTypes.string,
    textColor : PropTypes.string
}

export default Header;