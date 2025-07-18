import PropTypes from 'prop-types';

function Students(props) {
  return (
    <>
        <div className="row">
            <div className="col-md-12 my-2">
                <h5>Student Details:</h5>
                <ul>
                    <li>Name: {props.name}</li>
                    <li>Age: {props.age !== undefined ? props.age : "N/A"}</li>
                    <li>Married: {props.married ? "Yes" : "No"}</li>
                </ul>
            </div>
        </div>      
    </>
  );
}

Students.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    married: PropTypes.bool
}

Students.defaultProps = {
    name: "Guest Student",
    age: 0,
    married: false
}

export default Students;