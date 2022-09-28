import Student from './Student'


function Roster(props) {
    const studentsComponents = props.students.map((student, i) => {
        return (
            <Student
                name={student.name}
                bio={student.bio}
                scores={student.scores}
                key={`student-${i}`}
            />
        )
    })
    return (
      <div className="App">
        {studentsComponents}
      </div>
    );
  }

export default Roster;