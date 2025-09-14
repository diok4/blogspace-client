import { Input, InputGroup, Kbd } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

export const SearchInput = () => (
  <InputGroup
    flex="1"
    startElement={<LuSearch />}
    endElement={<Kbd>⌘ K | ctrl + k</Kbd>}
  >
    <Input style={{ borderRadius: "T7px" }} placeholder="Search creator..." />
  </InputGroup>
);
