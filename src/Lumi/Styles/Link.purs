module Lumi.Styles.Link where

import Prelude
import Lumi.Styles (StyleModifier, color, nested, none, str, styleModifier)
import Lumi.Styles.Box (box)
import Lumi.Styles.Theme (LumiTheme(..))
import React.Basic.Emotion (css)

link :: StyleModifier
link =
  box
    >>> styleModifier \(LumiTheme theme) ->
        css
          { color: color theme.colors.primary
          , textDecoration: none
          , "&:visited":
            nested
              $ css
                  { color: color theme.colors.primary
                  , textDecoration: none
                  }
          , "&:hover":
            nested
              $ css
                  { cursor: str "pointer"
                  , textDecoration: str "underline"
                  }
          }
