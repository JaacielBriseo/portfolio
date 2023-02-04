import React from 'react'
import { useContext } from 'react';
import { ProjectContext } from './ProjectCard';

export const ProjectDescription = () => {
  const {desc} = useContext(ProjectContext)
  return (
    <p>{desc}</p>
  )
}
