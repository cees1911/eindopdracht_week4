/* guessletter is het motortje dat de output naar de DOM regelt. 
   De function wordt aangeroepen oor op de guess button te drukken  De functie test 
            1 is het spel nog niet afgelopen                  
            2 is er geen spatie ingevoerd                  
            3 of de ingevoerde letter in het word zit                    
   bij false het verhoogt de tries ++ en veranderd 
   in de DOM het aantal levens  Maak een array met alle ingevoerde letters.  
   Roept de functie theWord aan deze maakt deze vult de goed geraden letter  
   in de DOM op de juiste plaats de niet geraden letters krijgt een "_"  
   Roept de functie theLetter aan en deze plaats de fout geraden letter  */



  const guessLetter = require("./script.js");

  test("Komt letter voor in woord", () => {
      const word = "moestuin";
      const input1 = "o";
      const output = word.includes(input1);
      expect(output).toBe(true);

  }) 