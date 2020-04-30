module Lumi.Styles.Border where

import Prelude

import Lumi.Components.Spacing (Space(..))
import Lumi.Styles (StyleModifier, styleModifier, styleModifier_)
import Lumi.Styles.Box (box)
import Lumi.Styles.Box as Box
import Lumi.Styles.Theme (LumiTheme(..))
import React.Basic.Emotion (color, css, int, nested, none, prop, str)

border :: StyleModifier
border =
  box
    >>> styleModifier \(LumiTheme theme) ->
      css
        { label: str "border"
        , borderWidth: int 1
        , borderColor: color theme.colors.black4
        , borderStyle: str "solid"
        , padding: str "8px 16px"
        }

_round :: StyleModifier
_round =
  styleModifier_
    $ css
      { borderRadius: int 4
      }

_topBottom :: StyleModifier
_topBottom =
  styleModifier_
        ( css
            { borderLeft: none
            , borderRight: none
            , borderRadius: int 0
            , paddingLeft: int 0
            , paddingRight: int 0
            }
        )

_interactive :: StyleModifier
_interactive =
  Box._interactive
    >>> Box._focusable
    >>> styleModifier \(LumiTheme theme) ->
        css
          { "&:hover":
            nested
              $ css
                  { borderColor: color theme.colors.black2
                  }
          }

_listSpaced :: StyleModifier
_listSpaced =
  styleModifier \(LumiTheme theme) ->
    css
      { "&:not(:first-child)":
        nested
          $ css
              { marginTop: prop S8
              }
      }

_listCompact :: StyleModifier
_listCompact =
  styleModifier \(LumiTheme theme) ->
    css
      { "&:first-child":
        nested
          $ css
              { borderTopColor: color theme.colors.transparent
              }
      , "&:last-child":
        nested
          $ css
              { borderBottomColor: color theme.colors.transparent
              }
      , "&:not(:first-child)":
        nested
          $ css
              { marginTop: int (-1)
              , ":not(:hover)":
                nested
                  $ css
                      { borderTopColor: color theme.colors.transparent
                      }
              }
      }
