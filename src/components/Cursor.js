import React from 'react'
import { Entity, Animation } from 'aframe-react'

export default props => {
  const geometry = {
    primitive: 'ring',
    radiusInner: 0.01,
    radiusOuter: 0.016
  };
  const material = {
    color: props.color || 'white',
    shader: 'flat',
    opacity: props.opacity || 0.9,
    transparent: true
  };
  return (
    <Entity cursor={props} geometry={geometry} material={material} position="0 0 -1">
      <Animation attribute="scale" begin="click" dur="150" fill="backwards"
                 to="0 0 0"/>
    </Entity>
  );
}
