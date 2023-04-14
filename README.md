# ColoRandom

## Abstract:
ColoRandom is a site that generates color palettes for its users. The user is presented with five random colors labeled with their hex codes. The user can *lock* a color, which will keep that color when a new palette is generated. From there, the user may *save* or *delete* any palette of their choosing. Users can also *edit* palettes.
## Installation Instructions:
- Fork this repository.
- Copy the SSH key in order to clone your forked repository down into your local device.
- `cd` into the cloned directory.
- Open in VS Code.
- Run `open index.html` in your terminal in order to view the [project](https://sakisandrac.github.io/colorandom-project/) in a browser. 

## Preview of App:
![](https://user-images.githubusercontent.com/126428377/232164005-55cb3c10-389d-442d-b852-47e213c71171.gif)
## Context:
- Mod 1, Week 4 of Turing's [Front-End Curriculum](https://frontend.turing.edu/)
- 18-20 hours to complete

## Contributors:
- [Saki Chatphatthanasiri](https://github.com/sakisandrac)<br>
- [Daniel Cochico](https://github.com/dcochico)<br>
- [Laura Garcia Guerra](https://github.com/lauraguerra1)<br>
- [Mike Gudenau](https://github.com/mikegudenau)

## Learning Goals:
- Write semantic HTML and efficient CSS to form a usable UI
- Write clean JavaScript and leverage functions, creating and using an effective data model
- Manipulate the page after it has loaded adding, removing, and updating elements on the DOM
- Refine collaboration skills

## Wins + Challenges:
### Wins:
- Being able to identify and debug the problem we were having while saving palettes - the savedPalettes array was being overwritten by currentColorPalette every time we were saving. The group got together and we were able to solve the problem after learning about deep and shallow copies of an array. We found the solution was to create a deep copy of the array and push that to savedPalettes.
- Establishing our DTR norms early in the project and sticking to them.
### Challenges:
- Our biggest challenge was learning to work together with a larger group for the first time in terms of delegating work and Git Workflow. We wanted our contributions to be even in terms of commits and line contribution but found that the number of commits and lines didn’t accurately reflect the amount of work each person actually did. This ultimately took away from the experience of delegating tasks evenly. We feel that if we had focused less on the GitHub insights, this would have been less of a challenge. We used the paired programming style to address this issue so that we could each have a chance to learn and contribute.
- Working in a four person group led to an occasional merge conflict. We found that they were easier to resolve than we had initially thought. We learned to take the conflicts slowly and go through the code line by line to resolve them.