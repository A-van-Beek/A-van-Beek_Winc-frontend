**Hier een eigen ToDo-list**
đŠ âŗī¸ â

De functie die we uiteindelijk gaan schrijven moet verifyPassword heten. We geven deze functie ÃŠÃŠn argument. Dat argument gaat "iets" zijn dat we gaan checken om te kijken of het een goed genoeg wachtwoord is.

condities: - password is korter dan 9 karakters - password is niet null - password heeft 1 of meer uppercase karakters - password heeft 1 of meer lowercase karakters - password heeft 1 of meer cijfers (zie: https://www.geeksforgeeks.org/javascript-regexp-test-method/)

password wordt goedgekeurd als: - tenminste 3 van bovenstaande condities true zijn - conditie 4 (lowercase) is true (deze moet dus altijd true zijn)

_voorbereiding_
â opbouw basis files
â installatie jest-files
â create script.test.js file
â test-run standaard testje

per conditie:
â schrijf een aantal tests, zowel voor retour bij true als bij false
â schrijf de (deel)functie

voor het totaal
â schrijf de tests voor de algemene functie
â schrijf de algemene functie, let op combinaties en zorg ervoor dat de tests passen

uitvragen gewenste wachtwoord
â maak invoerveld in HTML
â voeg listener toe
đŠ schrijf test voor input-functie,
_**kan niet, testen met DOM-invoer niet mogelijk**_
â schrijf input-functie

_Refactor code_
â verbeter tijdelijke namen van variabelen
â schoon code op
â voeg relevante commentaarregels toe
â vink to-do-list af

_test-wachtwoorden:_ - henkie1 - 1234a - z - henkie1234 - HENKhenk - Henk33$ - 1234 - ' ' (leeg)
