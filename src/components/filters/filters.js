import React from "react";
import { connect } from "react-redux";
import { filterArticles } from "../../ac";
import Select from "react-select";
import DayPicker from "react-day-picker";
import style from "./filters.css";
import "react-day-picker/lib/style.css";

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
  state = {
    selectedOption: options[0]
  };
  handleCommentsChange = selectedOption => {
    this.setState({ selectedOption });
    this.props.filterArticles({ comments: selectedOption.value });
  };

  handleDateChange = (day, modifiers, e) => {
    day.setHours(0);
    this.props.filterArticles({ date: day.toISOString() });
  };

  reset = () => {
    this.props.filterArticles({ date: null, comments: "" });
  };

  render() {
    const { filters } = this.props;
    const { selectedOption } = this.state;

    return (
      <div className={style.filters}>
        <h3> Filter articles by:</h3>
        <div className={style.inputs}>
          <div className={style.date}>
            <label>Date:</label>
            <DayPicker onDayClick={this.handleDateChange} />
          </div>
          <div className={style.select}>
            <label>Comments:</label>
            <Select
              value={selectedOption}
              onChange={this.handleCommentsChange}
              options={options}
            />
          </div>
        </div>
        <p>Selected date: {filters.date}</p>
        <p>Selected comments: {filters.comments}</p>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Filters;
