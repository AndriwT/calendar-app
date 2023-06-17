import Day from "./Day";
import NoteSection from "./NoteSection";
import ToDos from "./ToDos";
import WritingSection from "./WritingSection";

const App = () => {
  return (
    <div className="flex flex-col pr-10">
      <h1 className="pb-4">Calendar App </h1>
      <div className="flex">
        <div className="flex w-full pt-4">
          <Day />
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
