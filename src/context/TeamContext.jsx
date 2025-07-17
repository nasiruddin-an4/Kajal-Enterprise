import { createContext, useContext } from "react";
import teamData from "../data/teamDetails.json";

const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const { leadership, technicalTeam, operationsTeam } = teamData;
  const allMembers = [...leadership, ...technicalTeam, ...operationsTeam];

  return (
    <TeamContext.Provider
      value={{
        leadership,
        technicalTeam,
        operationsTeam,
        allMembers,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => {
  const context = useContext(TeamContext);
  if (!context) {
    throw new Error("useTeam must be used within a TeamProvider");
  }
  return context;
};
