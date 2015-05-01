module Pixi.Point where

import Pixi.Internal
import Control.Monad.Eff
import Data.Foreign.OOFFI

data Point = Point X Y

foreign import data PixiPoint :: *

newPixiPoint :: forall e. Number -> Number -> Eff (pixiConversion :: PixiConversion | e) PixiPoint
newPixiPoint = "Point" `instantiate2From` pixi

runPoint :: Point -> Eff _ PixiPoint
runPoint (Point x y) = newPixiPoint (runX x) (runY y)

getX :: PixiPoint -> Eff _ X
getX = (<$>) X <<< getter "x"

getY :: PixiPoint -> Eff _ Y
getY = (<$>) Y <<< getter "y"

getPoint :: PixiPoint -> Eff _ Point
getPoint p = Point <$> getX p <*> getY p

