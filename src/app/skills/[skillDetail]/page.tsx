import React from 'react'

export default async function SkillDetail({params}: {params: {skillDetail: string}}) {
  console.log(params.skillDetail)
  return (
    <div>{params.skillDetail}</div>
  )
}
