# _name here_

#### _project, 10.16.2020_

#### By _**Nathan Schrader**_

## Description

_description here._

## Setup/Installation Requirements

* _Clone this repository_
* _Open a simple HTTP server in the top level of the cloned directory. For a mac, run the following commanad in your terminal:_
**python -m SimpleHTTPServer**
* _Then open your web browser of choice to localhost:8800_

## Test Specs

1.
Describe: userInput
Test: "Takes in user input, converts to integer and stores it in a variable"
Expect(userInput("5")).toEqual([5])

2.
Describe: createArray
Test: "Creates an array of integers ranging from 0 to the user's inputed integer"
Expect(createArray("5")).toEqual([0, 1, 2, 3, 4, 5]);

3.
Describe: createString
Test: "Takes array of integers and converts them to an array of strings"
Expect(createString([0, 1, 2, 3, 4, 5])).toEqual(["0", "1", "2", "3", "4", "5"])

4.
Describe: transformString
Test: "Transforms string based on instructed logic given in Project guidelines"
Expect(transformString(["0", "1", "2", "3", "4", "5"])).toEqual(["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5"])


## Known Bugs

_bugs here_

## Support and contact details

_If you run into any issues or have concerns, please reach out at nathanschrader@icloud.com_

## Technologies Used

_HTML, CSS, Visual Studio Code, Github_

Copyright (c) 2020 **_Nathan Schrader_**

