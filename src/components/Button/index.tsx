interface Props{
  onClick: () => void;
  text: string;
  type: "reset" | "button" | "submit" | undefined 
}

export function Button({onClick, text, type}: Props){
  return(
    <button 
    style={{
      backgroundColor: 'rgb(0, 21, 41)', 
      color: '#FFF',
      borderRadius: 3,
      padding: '5px 20px',
      marginRight: 10
    }}
    type={type} 
    onClick={onClick}>
      {text}
    </button>
    )
}