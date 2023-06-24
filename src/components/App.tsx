import { useState } from "react";
import Day from "./Day";
import NoteSection from "./NoteSection";
import ToDos from "./ToDos";
import WritingSection from "./WritingSection";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

const App = () => {
  const [date, setDate] = useState<any>(new Date());

  return (
    <div className="flex flex-col pr-10">
      <h1 className="pb-4">Calendar App </h1>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <Day />
          <Calendar onChange={setDate} value={date} />
        </div>
        <div className="flex w-full pt-4">
          <div className="flex flex-col">
            <div className="pb-2">
              <NoteSection />
            </div>
            <div>
              <ToDos />
            </div>
          </div>
          <WritingSection />
        </div>
      </div>
    </div>
  );
};

export default App;
