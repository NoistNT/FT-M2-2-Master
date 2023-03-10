import React from 'react'

export default class Animals extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.animals.map(({ index, name, image, specie }) => {
          return (
            <div key={index}>
              <hr />
              <h5>{name}</h5>
              <img src={image} alt={name} width="300px" />
              <br />
              <span>{specie}</span>
            </div>
          )
        })}
      </div>
    )
  }
}
