/// <reference types="cypress" />

describe('example to-do app', () => {
  // 每次测试前都会执行，都按这个网站进行测试
  beforeEach(() => {
    cy.visit('https://juejin.cn')
  })

  it('元素的信息判断', () => {
    // 判断当前nav-list下面的a元素是否有20个
    cy.get('.nav-list a').should('have.length', 20)
    // 判断当前nav-list下面的第一个a元素是否为首页
    cy.get('.nav-list a').first().should('have.text', '首页')
    // 判断最后一个
    cy.get('.nav-list a').last().should('have.text', '最新')
    // 延迟两秒
    cy.wait(2000);
    // 获取一个输入框然后输入最后执行元素点击
    const searchInputValue = 'chrome插件'
    cy.get('.search-input').clear().type(`${searchInputValue}`)
    cy.get('.seach-icon-container').click()
  })
})