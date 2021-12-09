# Simon Says

## Description

The classical "Simon Says" game created with code. The computer will light up a color and the user has to select the same color. This will proceed for several rounds until the user fails the sequence the computer does.

### Technologies Used

For this project the technologies and tools used were:

- Vanilla JavaScript
- Bootstrap
- CSS
- SASS
- HTML
- NPM

#

## Installation

As this project runs with bootstrap you will have to have NPM or anything similar and then run this little code snippet on the CLI.

```
npm install
```

This will allow to download the dependencies you need to run the Simon Says properly.

#

## Challenges Faced

This project was an interesting one. It involved a lot of thinking and figuring out how the setTimeout() function worked, because being an asynchronous does not stop the other functions running.

The good thing, is that no matter what coding challenge you have ahead if you spend a few minutes writing pseudocode, it's going to give you a clearer perspective on how to approach the task.

#

## Usage

The game is pretty straightforward. The machine is going to highlight a box and the user simply has to select the same one that the machine chose. The status bar will show if it's the user or the computer turn.

-add image1-

When the user fails the sequence that the machine has stored, then the game ends and the status bar will update that a new game needs to be started to continue playing.

-add image2-

#

## What I learned

- setTimeout() is an asynchronous function! That means that the browser will read it and then keep executing the next functions of the stack. This is pretty good if we want something to happen after a while the code still runs.

- One really important thing that I learnt, is that if an Event Handler is executed and then a function activates because of that interaction, the parameter of that function is going to be the event! When I understood what was happening a lot of options opened before me.

- If you need to create a project really quickly and you don't want to focus on the design that much, CSS Frameworks like Bootstrap can speed up the production of it.

- To block the input of the user, you can run an event handler with an empty method inside of it.

- SASS is amazing. It's way easier to write CSS with it than normally. It helps a lot having separate files that are different sections from design.

#

## Support

If some error should appear, you can contact me through:

- Twitter: @patoraedler
- Email: patoraedler@gmail.com

#

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate :)

#

## Author

Patrick Raedler.

#
