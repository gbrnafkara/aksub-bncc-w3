import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Dropdown from "./components/DropdownContent/DropdownContent";
import { getDate, getDateLabel } from "./utils/utils";
import { FaCheck } from "react-icons/fa6";

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

    const newData = { ...datas, id: Date.now(), complete: false };

    setFormSubmitted((prev) => [...prev, newData]);

    setDatas({
      description: "",
      "date-item": "",
    });
  };

  const handleCheckboxClick = (index) => {
    setFormSubmitted((prev) =>
      prev.map((item) =>
        item.id === index ? { ...item, complete: !item.complete } : item,
      ),
    );
  };

  const groupedData = formSubmitted.reduce(
    (acc, item) => {
      const label = getDateLabel(item["date-item"]);

      if (label === "Today") {
        acc.today.push(item);
      } else if (label === "Archive") {
        acc.archive.push(item);
      } else {
        acc.others.push(item);
      }
      return acc;
    },
    {
      today: [],
      others: [],
      archive: [],
    },
  );

  const sections = [
    { key: "today", title: "Today" },
    { key: "others", title: "Others" },
    { key: "archive", title: "Archive" },
  ];

  console.log(getDate());
  return (
    <section className="w-full h-full justify-center">
      <div className="w-[67%] mx-auto bg-white mt-17.5 px-18.75 py-12 shadow-[0_4px_98.1px_0_rgba(0,0,0,1,.05)] rounded-xl flex flex-col">
        <h1 className="text-[28px] font-semibold">Good Morning, User 👋</h1>
        <h4 className="text-[#9D9D9D] mt-2">It’s {getDate()}</h4>
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
          {sections.map((section) => (
            <React.Fragment key={section.key}>
              {section.key !== "archive" && (
                <Dropdown
                  title={section.title}
                  key={section.key}
                  totalData={groupedData[section.key].length}
                >
                  {groupedData[section.key].map((data) => {
                    let bgColor, txtColor;
                    const date = getDateLabel(data["date-item"]);
                    if (date === "Today") {
                      bgColor = "#E8F4FF";
                      txtColor = "#2F46DB";
                    } else if (date === "Tomorrow") {
                      bgColor = "#FFF7E3";
                      txtColor = "#D86C01";
                    } else {
                      bgColor = "#E4FFE4";
                      txtColor = "#367812";
                    }
                    return (
                      <div
                        key={data.id}
                        className="w-full flex justify-between mt-2 p-4 rounded-lg"
                        style={{
                          backgroundColor: data.complete
                            ? "#F8F8F8"
                            : "#FFFFFF",
                          transition: "bacground-color .3s ease-in",
                        }}
                      >
                        <div className="flex gap-10 items-center">
                          {/* <input
                            type="checkbox"
                            checked={data.complete}
                            onChange={() => handleCheckboxClick(data.id)}
                            className="outline-none"
                          /> */}
                          <div
                            className="border border-[#EBEBEB] rounded-sm p-2"
                            style={{
                              backgroundColor: data.complete
                                ? "#0D0D0D"
                                : "transparent",
                              transition: "background-color .3s ease-in",
                            }}
                            onClick={() => handleCheckboxClick(data.id)}
                          >
                            <FaCheck color="#fff" />
                          </div>
                          <h4
                            style={{
                              textDecoration: data.complete
                                ? "line-through"
                                : "",
                              textDecorationColor: data.complete
                                ? "#9D9D9D"
                                : "",
                              textDecorationThickness: data.complete
                                ? "2px"
                                : "",
                              color: data.complete ? "#9D9D9D" : "#000",
                              transition: "all .3s ease-in",
                            }}
                          >
                            {data.description}
                          </h4>
                        </div>
                        <h3
                          className="px-3 py-2 rounded-sm"
                          style={{
                            backgroundColor: bgColor,
                            color: txtColor,
                          }}
                        >
                          {date}
                        </h3>
                      </div>
                    );
                  })}
                </Dropdown>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
