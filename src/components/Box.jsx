function Box(props){
    const colorStyles={
        divs:{
            "backgroundColor":props.background,
            "padding":"1rem",

        },
        h1:{
            "color":props.color,
            "fontSize":"3rem"
        }
        
    }
    return(
        <div style={colorStyles.divs}>
        
        <h1 style={colorStyles.h1}> 
            {props.text}</h1>
            <p className={props.textClass}>Lorem ipsum dolor sit, amet consectetur </p>
        </div>
    )
}

export default Box