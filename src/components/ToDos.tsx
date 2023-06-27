import { Checkbox, Input } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

const ToDos = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let item = e.target.value;
    setTodo(item);
  };

  const handleAddItem = () => {
    if (todoList.length < 9) {
      setTodoList([...todoList, todo]);
      setTodo("");
    } else {
      alert("Enough todos for Today, chill.");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };

  return (
    <div className="bg-stone-200 w-96 h-96 rounded-xl">
      <h3 className="pt-4 pl-4 text-black">ToDos</h3>

      <Input
        value={todo}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        resize="none"
        size="lg"
        variant="none"
        background="#E1E1E1"
      />

      <div className="pl-4">
        {todoList.map((item, index) => (
          <div className="flex pt-2">
            <input type="checkbox" id={todo} name="todo" />
            <div className="pl-2" key={index}>
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDos;
