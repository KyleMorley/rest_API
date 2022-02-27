const Button = ({ text, onClick, styles }) => {
  return (
    <button style={styles} onClick={onClick} >{text}</button>
  )
}

export default Button