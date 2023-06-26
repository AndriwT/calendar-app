import App from "@/components/App";
import AuthButtons from "@/components/AuthButtons";
import { Flex } from "@chakra-ui/react";

export default function CalendarDay() {
  return (
    <div className="flex flex-col justify-center items-center bg-stone-300 rounded-lg pt-10 pb-10">
      <App />
      <Flex mt={16}>
        <AuthButtons />
      </Flex>
    </div>
  );
}
