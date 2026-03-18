import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import DropdownContent from "./components/DropdownContent/DropdownContent";

const App = () => {
  const [formSubmitted, setFormSubmitted] = useState([]);
  const [datas, setDatas] = useState({
    description: "",
    "date-item": "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDatas((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newData = { ...datas };

    setFormSubmitted((prev) => [...prev, newData]);

    setDatas({
      description: "",
      "date-item": "",
    });
  };

  const getDateLabel = (dateStr) => {
    const date = new Date();
    const target = new Date(dateStr);

    date.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);

    const diffTime = target - date;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Tomorrow";

    return target.toLocaleDateString("en-US", {
      weekday: "short",
      day: "2-digit",
      month: "short",
    });
  };

  const dateToday = formSubmitted.filter(
    (data) => getDateLabel(data["date-item"]) === "Today",
  );
  const dateOther = formSubmitted.filter(
    (data) => getDateLabel(data["date-item"]) !== "Today",
  );

  return (
    <section className="w-full h-full justify-center">
      <div className="w-[67%] mx-auto bg-white mt-17.5 px-18.75 py-12 shadow-[0_4px_98.1px_0_rgba(0,0,0,1,.05)] rounded-xl flex flex-col">
        <h1 className="text-[28px] font-semibold">Good Morning, User 👋</h1>
        <h4 className="text-[#9D9D9D] mt-2">It’s Monday, 12 April 2025</h4>
        <form
          className="w-full mt-15 flex gap-[19.82px] items-end"
          onSubmit={handleSubmit}
        >
          <Input
            idName={"description"}
            label={"What do you want to do?"}
            type={"text"}
            placeholder={"Study for mid exams..."}
            value={datas.description}
            sizeInput={366}
            onChange={handleChange}
          />
          <Input
            idName={"date-item"}
            label={"When should it be done?"}
            type={"date"}
            placeholder={"Monday, 25th April 2025"}
            value={datas["date-item"]}
            sizeInput={286}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="py-4.5 px-5.5 rounded-lg bg-[#0C51FF] text-white font-semibold max-h-max"
          >
            Create
          </button>
        </form>
        <div className="mt-9 flex flex-col gap-10">
          <DropdownContent title={"Today"}>
            {formSubmitted && (
              <>
                {dateToday.map((data, key) => (
                  <div
                    className="w-full flex justify-between mt-2 border px-3 py-2"
                    key={key}
                  >
                    <div className="flex gap-10 items-center">
                      <input
                        type="checkbox"
                        name={`chc-${key}`}
                        id={`chc-${key}`}
                      />
                      <h4>{data.description}</h4>
                    </div>
                    <h3 className="px-3 py-2 bg-[#E8F4FF] text-[#2F46DB] rounded-sm">
                      {getDateLabel(data["date-item"])}
                    </h3>
                  </div>
                ))}
              </>
            )}
          </DropdownContent>
          <DropdownContent title={"Other"}>
            {formSubmitted && (
              <>
                {dateOther.map((data, key) => (
                  <div
                    className="w-full flex justify-between mt-2 border"
                    key={key}
                  >
                    <div className="flex gap-10 items-center">
                      <input
                        type="checkbox"
                        name={`chc-${key}`}
                        id={`chc-${key}`}
                      />
                      <h4>{data.description}</h4>
                    </div>
                    <h3 className="px-3 py-2 bg-[#E8F4FF] text-[#2F46DB] rounded-sm">
                      {getDateLabel(data["date-item"])}
                    </h3>
                  </div>
                ))}
              </>
            )}
          </DropdownContent>
        </div>
      </div>
    </section>
  );
};

export default App;
