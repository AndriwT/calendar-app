import { Textarea } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

const WritingSection = () => {
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="pl-2">
      <div className="bg-stone-200 w-[40rem] h-[40.5rem] rounded-xl">
        <h3 className="pt-4 pl-4 text-black">Writing</h3>
        <Textarea
          value={text}
          onChange={handleChange}
          resize="none"
          size="lg"
          h="calc(88vh)"
          variant="none"
          background="none"
        />
      </div>
    </div>
  );
};

export default WritingSection;
