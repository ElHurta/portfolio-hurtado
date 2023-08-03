import React from 'react'
import IconsProvider from '../../components/Icons/IconsProvider';

export default async function SkillDetail({params}: {params: {skillDetail: string}}) {
  console.log(params.skillDetail)
  return (
    <article>
      <header>
        <p>Skill Info</p>
      </header>
      <main>
        <IconsProvider
          requestedIcon='FaReact'
        />
        <aside>
          <div>
            <header>
              Description
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nihil illo dolores! Illo esse accusantium voluptate, molestias quidem porro debitis.</p>
          </div>
          <div>
            <header>
              Related Experience
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nihil illo dolores! Illo esse accusantium voluptate, molestias quidem porro debitis.</p>
          </div>
        </aside>
      </main>
    </article>
  )
}
