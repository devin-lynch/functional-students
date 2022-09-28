import Score from './Score'


function Student(props) {
    // const scoreComponents = props.scores.map((element, i) => {
    //     return (
    //         <Score
    //             score={element.score}
    //             date={element.date}
    //             key={`score-${i}`}
    //         />
    //     )
    // })
    return (
        <div>
            <h1>{props.name}</h1>

            <p>{props.bio}</p>

            {/* you can put the js directly into the div and not have to create a variable/call to it! */}
            {props.scores.map((element, i) => {
                return (
                    <Score
                        score={element.score}
                        date={element.date}
                        key={`score-${i}`}
                    />
                 )
            })}
            {/* {scoreComponents} */}
        </div>
    )
}

export default Student;