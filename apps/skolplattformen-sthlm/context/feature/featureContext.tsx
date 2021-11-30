import { Features, FeatureType } from '@skolplattformen/api'
import React from 'react'

export const FeatureFlagsContext = React.createContext<Features>({
  LOGIN_BANK_ID_SAME_DEVICE: false,
  FOOD_MENU: false,
})

interface Props {
  features: Features
}

export const FeatureProvider: React.FC<Props> = (props) => {
  return (
    <FeatureFlagsContext.Provider value={props.features} {...props}>
      {props.children}
    </FeatureFlagsContext.Provider>
  )
}