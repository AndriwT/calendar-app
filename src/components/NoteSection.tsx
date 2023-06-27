import { Input } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

const NoteSection = () => {
  const [note, setNote] = useState("");
  const [noteList, setNoteList] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const handleAddItem = () => {
    if (noteList.length < 7) {
      setNoteList([...noteList, note]);
      setNote("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };

  return (
    <div className="bg-stone-200 w-96 h-64 rounded-xl">
      <h3 className="pt-4 pl-4 text-black">Notes</h3>
      <Input
        value={note}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        resize="none"
        size="lg"
        variant="none"
        background="#E1E1E1"
      />
      {noteList.map((item, index) => (
        <div className="flex items-center pl-4">
          <div>{">"}</div>
          <div className="pl-2" key={index}>
            {item}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteSection;
