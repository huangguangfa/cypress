/// <reference types="cypress" />

describe('example to-do app', () => {
  // 每次测试前都会执行，都按这个网站进行测试
  // beforeEach(() => {
  //   cy.visit('https://juejin.cn')
  // })

  // it('元素的信息判断', () => {
  //   // 判断当前nav-list下面的a元素是否有20个
  //   cy.get('.nav-list a').should('have.length', 20)
  //   // 判断当前nav-list下面的第一个a元素是否为首页
  //   cy.get('.nav-list a').first().should('have.text', '首页')
  //   // 判断最后一个
  //   cy.get('.nav-list a').last().should('have.text', '最新')
  //   // 延迟两秒
  //   cy.wait(2000);
  //   // 获取一个输入框然后输入最后执行元素点击
  //   const searchInputValue = 'chrome插件'
  //   cy.get('.search-input').clear().type(`${searchInputValue}`) // .type(`${newItem}{enter}`) 直接回车
  //   cy.get('.seach-icon-container').click()
  // })

  it('菜单栏的循环执行路由切换', () => {
    // Cypress.Commands.add("clickAndWaitForResponse", (selector) => {
    //   cy.intercept('POST', '/recommend_api/v1/article/recommend_all_feed').as('response');
    //   cy.get(selector).click();
    //   return cy.wait('@response');
    // });

    // cy.wrap($el).clickAndWaitForResponse('a').then((response) => {
    //   console.log(response.body);
    // });
    cy.intercept('POST', '/recommend_api/v1/article/recommend_all_feed').as('article')
    cy.visit('https://juejin.cn')

    cy.get('.nav-list>a').each(($el, index, $list) => {
      return new Cypress.Promise(resolve => {
        cy.wrap($el).click()
        cy.wait('@article').then( () => {
          alert('111')
        })
        resolve()
      })
    })
  })
})