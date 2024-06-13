function Student(props){
    console.log(props)
    return(
        <div>
            <h1>
                Student details
            </h1>
            <p>
                Name: {props.name}
            </p>
            <p>
                roll: {props.rollNo}
            </p>
        </div>
    )
}
export default Student