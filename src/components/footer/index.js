import React from 'react'
import style from './index.module.less'

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.wechat}>
          <img src={require('@/common/img/wechat.jpg')} alt='1697云开见日' />
          <p>欢迎关注个人公众号～</p>
        </div>
        <p>made by Maximilian <a href="https://github.com/max210" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </div>
      <a className={style.a} href='http://beian.miit.gov.cn' target='_blank' rel='noopener noreferrer'>京ICP备19052426号-1</a>
    </div>
  )
}

export default Footer
