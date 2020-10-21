import Vuex from "vuex"
import { createLocalVue, shallowMount } from '@vue/test-utils'
import ArticlesList from '@/components/ArticlesList.vue'
import actions from '@/store/actions.js'

const localVue = createLocalVue()
localVue.use(Vuex)

const mutations = {
  testMutation: jest.fn()
}

const store = new Vuex.Store({
  mutations, actions
})

describe('ArticlesList.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(ArticlesList, {
      propsData: { msg },
      localVue,
      store
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
