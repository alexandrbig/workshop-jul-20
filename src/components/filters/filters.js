import React from "react";
import { connect } from "react-redux";
import { filterArticles } from "../../ac";
import Select from "react-select";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import "./filters.css";

const options = [
  { value: "", label: "All" },
  { value: "comments", label: "With comments" },
  { value: "nocomments", label: "Without comments" }
];

@connect(
  state => ({ filters: state.filters }),
  { filterArticles }
)
class Filters extends React.Component {
  componentDidMount() {
    const { filters, filterArticles, isOpen, setOpenId } = this.props;
    console.log(filters);
  }

  handleCommentsChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
    this.props.filterArticles({ comments: selectedOption.value });
  };

  handleDateChange = (day, modifiers, e) => {
    console.log(day, modifiers);
    day.setHours(0);
    this.props.filterArticles({ date: day.toISOString() });
  };

  reset = () => {
    this.props.filterArticles({ date: null, select: "" });
  };

  render() {
    const { filters } = this.props;
    const selectedOption = filters.select;

    return (
      <div className={"filters-block"}>
        <h3> Filter articles by:</h3>
        <div className={"filters-inputs"}>
          <div className={"date"}>
            <label>Date:</label>
            <DayPicker onDayClick={this.handleDateChange} />
          </div>
          <div className={"select"}>
            <label>Comments:</label>
            <Select
              value={selectedOption}
              onChange={this.handleCommentsChange}
              options={options}
            />
          </div>
        </div>
        <p>Selected date: {filters.date}</p>
        <p>Selected comments: {filters.select}</p>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Filters;
