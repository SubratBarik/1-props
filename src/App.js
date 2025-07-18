import Students from "./components/Students";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 my-5 mb-3 text-center">
            <h1>Props</h1>
          </div>
          <div className="col-md-12">
            <Students name="Subrat Kumar Barik" age={41} married={true} />
            <Students name="Putul Rani Barik" age={36} married={true} />
            <Students name="Shreya Rani Barik" age={3} married={false} />
            <Students name="Shubham Maiti" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
