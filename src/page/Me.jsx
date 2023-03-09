import React, { type FC } from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'antd-mobile'
import Layout from '../layout/default'

const Me: FC = props => {
  const state = useSelector(state => state)
  console.log(state)
  return (
    <Layout>
      <div>
        <Button color='primary' fill='solid'>
          Solid
        </Button>
        Me {JSON.stringify(state)}
      </div>
    </Layout>
  )
}

export default Me
