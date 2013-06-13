Welcome to HackyNote
====================
Presentations made by Hackers
---------------------


##HackyNote

#### What is that?
It is a **markdown** based presentation creator made for developers.

All that you need to do is access [Hackynote](http://thiagofelix.github.com/hackynote/app/), start writing markdown in the editor and instantly you will see your presentation being made.

####100% open-source and for fun
HackyNote is free for use, the goal is to make it popular and to recruit people to contribute to the project, push it fowards and make this app help as many people as possible =D

####Clean Code
I wrote HackyNote while I was reading [**Clean Code**](http://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882) book from uncle Bob, so this application is all about **quality of code**. It's an attempt to implements as many good principles of code design as possible.
This is the nature of HackyNote, it's more valuable to deliver a very well crafted refactoring thats makes the code cleaner than a bunch of new features that decrement the code quality.


Adding Themes & Transitions
----------------------
1.  Fork this repository.
2.  Add your theme or transitions css to 'themes/[yourthemenamehere].css' or 'transitions/[yourthemenamehere].css'
3.  Add an entry to `themes.json` or 'transitions.json' with these properties:

        {
          "name": "My Theme",  // name of transition/theme ( will be displayied under the menu )
          "css": "themes/my_theme.css" // file of transition/theme ( will be loaded by the app )
          ]
        }
4.  Make sure that it looks alright by running `./scripts/web-server.js` (requires Node.js)
5.  Send a pull request


Credits
----------------------
**HackyNote** uses same outstanding libraries, created by real amazing people, and without these guys this project probably would never exists.
Big thanks to everyone.

+ [deck.js](http://imakewebthings.com/deck.js/) - The presentation engine
+ [marked.js](https://github.com/chjj/marked) - The library that really does the dirty job of parsing the markdown
+ [angular.js](http://angularjs.org/)  - Comments are useless
+ [twitter bootstrap](twitter.github.com/bootstrap/) - Gives to the HackyNote a decent visual design =)


Copyright / License
----------------------

Copyright 2013 Civilized Discourse Construction Kit, Inc.

Licensed under the GNU General Public License Version 2.0 (or later);
you may not use this work except in compliance with the License.
You may obtain a copy of the License in the LICENSE file, or at:

   http://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

