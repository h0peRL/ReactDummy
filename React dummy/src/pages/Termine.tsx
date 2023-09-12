import React from "react";
import Terminliste from "./components/Terminliste";
import TextMitTitel from "./components/TextMitTitel";
import Button from "./components/Button";

function Termine(): JSX.Element {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row justify-evenly w-full">
        <div className="w-1/3">
          <TextMitTitel
            titel="Termin Buchen"
            text="Auf dieser Seite können Sie Termine buchen! Wir bieten Ihnen kostenlose Sehtests und danaben
                                                             auch Brillenreparaturen. Profitieren Sie von unserem raschen und professionellen Service
                                                             noch heute und Buchen Sie einen Sehtest!"
          />
        </div>
        <Terminliste
          titel="Meine Termine"
          termine={["Sehtest", "Abholung Brille", "Sehtest"]}
        />
      </div>
      <div className="flex flex-row justify-between w-1/3 mt-24">
        <Button text="Sehtest buchen" dest="buchen" />
        <p className="text-2xl font-semibold">oder</p>
        <Button text="Reparatur beantragen" dest="reparatur" />
      </div>
    </div>
  );
}

export default Termine;
