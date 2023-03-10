import React from 'react'
import { DivButtons, Buttons } from '../StyledComponents/StyledButton'

export default class Botones extends React.Component {
  render() {
    const { alerts } = this.props
    return (
      <DivButtons>
        <Buttons onClick={() => window.alert(alerts.m1)}>Módulo 1</Buttons>
        <Buttons onClick={() => window.alert(alerts.m2)}>Módulo 2</Buttons>
      </DivButtons>
    )
  }
}

export { DivButtons, Buttons }
