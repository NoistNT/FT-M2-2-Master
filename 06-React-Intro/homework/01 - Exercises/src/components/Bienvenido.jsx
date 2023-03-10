import React from 'react'
import Botones from './Botones'

const studentName = 'Ariel Piazzano'
const techSkills = ['Html', 'Css', 'JavaScript', 'React', 'Redux']
const alerts = { m1: 'Aprobado', m2: 'En curso' }

export default function Bienvenido () {
  return (
    <div>
      <h1>React App Developed by</h1>
      <h3>{studentName}</h3>
      <ul>
        {techSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <Botones alerts={alerts} />
    </div>
  )
}

export { studentName, techSkills, alerts }
