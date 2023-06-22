This is a conversion from Java to Javascript of [Random game sprite generator](https://tmtg.nl/ludumdare/spritegen/) by [Boris van Schooten](https://tmtg.nl/).

https://denilsonsa.github.io/spritegen/spritegen.html

Other links:

* https://github.com/angarg12/RandomSpriteGenerator
* https://web.archive.org/web/20221016034741/http://www.img.uninhabitant.com/spritegen.html
* http://eandegames.weebly.com/devlog/gamedev-resource-pick-random-sprite-generators
* http://eandegames.com/gamedev-resource-pick-random-sprite-generators/

TODO:

* Create a better UI.
* Add more sliders and toggles for fine-tuning the parameters.
* Allow re-doing (and/or disabling) specific steps (the last function calls from `PixelArtGen.createSprite` function).
    * This certainly requires clearing the `Sprite.pixels` to transparent.
    * This might allow recoloring a sprite without changing the shape.
    * Even better: visually display the intermediate steps.
* Animate animated sprites.
* Allow mutating a sprite (`PixelArtGen.mergeSprites` function).
* Figure out the differences between [this](https://web.archive.org/web/*/http://www.xs4all.nl/~borisvs/jgame*) and [that](https://github.com/angarg12/RandomSpriteGenerator).
