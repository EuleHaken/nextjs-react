import { ReactNode, createContext, useContext, useState } from "react";

type DropdownContextType = {
  dropdownStates: { [key: string]: boolean };
  toggleDropdown: (name: string) => void;
};

export const DropdownContext = createContext<DropdownContextType | null>(null);

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error(
      "useDropdownContext must be used within a DropdownProvider"
    );
  }
  return context;
};

// TODO Refactor - This could probably all fit into "Dropdown.tsx", and MAYBE only the context could go into app/context/DropdownContext.tsx;
export const DropdownProvider = ({ children }: { children: ReactNode }) => {
  const [dropdownStates, setDropdownStates] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleDropdown = (name: string) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <DropdownContext.Provider value={{ dropdownStates, toggleDropdown }}>
      {children}
    </DropdownContext.Provider>
  );
};
