import { useState } from "react";

function App() {
  const [inputer, setInputer] = useState([]);
  const [inputdata, setInputdata] = useState({
    task: "",
    discription: "",
  });

  function changehandel(e) {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  }

  let { task, discription } = inputdata;

  function changehandel1() {
    setInputer([...inputer, { task, discription }]);
    setInputdata({ task: "", discription: "" });
  }

  function deleteTask(index) {
    setInputer(inputer.filter((_, ind) => ind !== index));
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          maxWidth: "100%",
        }}
      >
        <input
          type="text"
          autoComplete="off"
          name="task"
          placeholder="Task"
          value={inputdata.task}
          onChange={changehandel}
          style={{
            padding: "10px",
            margin: "5px 0",
            width: "90%",
            maxWidth: "400px",
            boxSizing: "border-box",
          }}
        />
        <input
          type="text"
          autoComplete="off"
          name="discription"
          placeholder="Task description"
          value={inputdata.discription}
          onChange={changehandel}
          style={{
            padding: "10px",
            margin: "5px 0",
            width: "90%",
            maxWidth: "400px",
            boxSizing: "border-box",
          }}
        />
        <button
          onClick={changehandel1}
          disabled={!task.trim() || !discription.trim()}
          style={{
            margin: "15px 0",
            padding: "10px 20px",
            cursor:
              !task.trim() || !discription.trim() ? "not-allowed" : "pointer",
            backgroundColor:
              !task.trim() || !discription.trim() ? "#ccc" : "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Add Task
        </button>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            maxWidth: "800px",
            wordWrap: "break-word",
          }}
        >
          <thead>
            <tr style={{ background: "#f2f2f2" }}>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  width: "30%",
                }}
              >
                Task
              </th>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  width: "50%",
                }}
              >
                Description
              </th>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  width: "20%",
                }}
              >
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {inputer.map((info, ind) => (
              <tr key={ind}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {info.task}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {info.discription}
                </td>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    textAlign: "center",
                  }}
                >
                  <button
                    onClick={() => deleteTask(ind)}
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "3px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
