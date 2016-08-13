This is a conversion from Java to Javascript of [Random game sprite generator](http://tmtg.net/ludumdare/spritegen/) by [Boris van Schooten](http://tmtg.net/).

http://denilsonsa.github.io/spritegen/spritegen.html

Other links:

* https://github.com/angarg12/RandomSpriteGenerator
* http://img.uninhabitant.com/spritegen.html
* http://eandegames.weebly.com/devlog/gamedev-resource-pick-random-sprite-generators
* http://eandegames.com/gamedev-resource-pick-random-sprite-generators/

TODO:

* Create a better UI.
* Add more sliders and toggles for fine-tuning the parameters.
* Allow re-doing (and/or disabling) specific steps (the last function calls from `PixelArtGen.createSprite function`).
    * This certainly requires clearing the `Sprite.pixels` to transparent.
    * This might allow recoloring a sprite without changing the shape.
    * Even better: visually display the intermediate steps.
* Animate animated sprites.
* Figure out the differences between [this](http://www.xs4all.nl/~borisvs/jgame-3.6.2.zip) and [that](https://github.com/angarg12/RandomSpriteGenerator).
