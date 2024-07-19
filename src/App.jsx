import react, { Component } from "react";
import "./App.css";
const pageNumbers = [];
for (let i = 1; i <= 20; i++) {
  if (i != 1) pageNumbers.push({ id: i, className: "" });
  else pageNumbers.push({ id: i, className: "active" });
}
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: pageNumbers,
      index: 1,
    };
  }
  render() {
    const { data, index } = this.state;
    const onChange = (id) => {
      let res = data.map((btn) => {
        if (btn.id == id) {
          this.setState({
            index: btn.id,
          });
          return { ...btn, className: "active" };
        } else {
          return { ...btn, className: "" };
        }
      });
      this.setState({ data: res });
    };
    const onAdd = (n) => {
      let idNumber = data.length;
      data.map((btn) => {
        if (btn.className == "active" && btn.id < data.length) {
          this.setState({
            index: btn.id + n,
          });
          idNumber = btn.id + n;
        }
        return idNumber;
      });
      let res = data.map((btn) => {
        return btn.id == idNumber
          ? { ...btn, className: "active" }
          : { ...btn, className: "" };
      });
      this.setState({ data: res });
    };
    const onBack = (n) => {
      let idNumber = 1;
      data.map((btn) => {
        if (btn.className == "active" && btn.id > 1) {
          this.setState({
            index: btn.id - n,
          });
          idNumber = btn.id - n;
        }
        return idNumber;
      });
      let res = data.map((btn) => {
        return btn.id == idNumber
          ? { ...btn, className: "active" }
          : { ...btn, className: "" };
      });
      this.setState({ data: res });
    };

    const onSelect = (e) => {
      const length = Math.ceil(200 / e.target.value);
      let res = [];
      for (let i = 1; i <= length; i++) {
        if (i != 1) res.push({ id: i, className: "" });
        else res.push({ id: i, className: "active" });
      }
      this.setState({ data: res });
    };
    return (
      <>
        <div className="pagination">
          <button onClick={() => onBack(1)}>{"<"}</button>
          <button
            className={data[0].className}
            onClick={() => onChange(data[0].id)}
          >
            {data[0].id}
          </button>
          {index > 4 && data.length > 10 ? (
            <button onClick={() => onBack(3)}>{"<<"}</button>
          ) : (
            ""
          )}
          {data
            .slice(
              data.length < 11 || index < 5
                ? 1
                : index > data.length - 3
                ? data.length - 4
                : index - 2,
              data.length < 11
                ? data.length
                : index < 5
                ? 5
                : index > data.length - 3
                ? data.length - 1
                : index + 1
            )
            .map((item) => {
              return (
                <button
                  className={item.className}
                  onClick={() => onChange(item.id)}
                >
                  {item.id}
                </button>
              );
            })}
          {index < data.length - 2 && data.length > 10 ? (
            <button onClick={() => onAdd(3)}>{">>"}</button>
          ) : (
            ""
          )}
          {data.length > 10 ? (
            <button
              className={data[data.length - 1].className}
              onClick={() => onChange(data[data.length - 1].id)}
            >
              {data[data.length - 1].id}
            </button>
          ) : (
            ""
          )}
          <button onClick={() => onAdd(1)}>{">"}</button>
          <select onClick={onSelect} name="" id="">
            <option value="10">10/page</option>
            <option value="20">20/page</option>
            <option value="30">30/page</option>
            <option value="40">40/page</option>
            <option value="50">50/page</option>
            <option value="60">60/page</option>
            <option value="70">70/page</option>
            <option value="80">80/page</option>
            <option value="90">90/page</option>
            <option value="100">100/page</option>
            <option value="110">110/page</option>
            <option value="120">120/page</option>
            <option value="130">130/page</option>
            <option value="140">140/page</option>
            <option value="150">150/page</option>
            <option value="160">160/page</option>
            <option value="170">170/page</option>
            <option value="180">180/page</option>
            <option value="190">190/page</option>
            <option value="200">200/page</option>
          </select>
        </div>
      </>
    );
  }
}

export default App;
