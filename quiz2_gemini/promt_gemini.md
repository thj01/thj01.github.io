[20250710]


Make an simple bootstrap app

the app has a top bar with title and dropdown to chose language

In the app you can select a challenge via 3 parameters: role, gender and challenge-level (3-levels) via a dropdowns

One of these options is to chose from all roles

in gender there must be an option for male (M), female (F) and both genders (MF). 

in the csv file the gender must be represented by a m for male, f for female and mf for 

if the user choses M the challenges are the m and the mf category
if the user choses F the challenges are the f and the mf category
if the user choses MF the challenges are the f, m and mf category

the challenge levels are: Easy, Medium and Hard

There must also be an "All levels" challenge level

When you hit the "challenge me" button the app shall show the challenge

The questions must be in a separate csv file with the columns: role, language, gender, level1, level2, level3

The user interface must be multilingual and the language must be chosen via the dropdown

there must be 2 languages (Danish, English)

The userinterface's text comes from an separate json file and the language dropdown changes the language on the whole page

the csv, json and css must be in seperate files