module Pixi.Internal where

import Data.Foreign.OOFFI
import Control.Monad.Eff

newtype X = X Number
newtype Y = Y Number

runX (X x) = x
runY (Y y) = y

foreign import data PIXI :: *
foreign import data PixiConversion :: !

foreign import pixi "var pixi = PIXI" :: PIXI