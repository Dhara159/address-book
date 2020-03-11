/* eslint-disable no-unused-vars */
import Vue from 'vue';
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Index from './../../src/containers/Index';
import Card from './../../src/components/Card';
import { fetchAllAddresses } from '../../src/utils';

const localVue = createLocalVue();

let wrapper;

describe('Index.vue', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test('Home page exists', () => {
    expect(wrapper.exists()).toBe(true);
  })

  test('Add card is displayed', () => {
    expect(wrapper.contains('#add-address')).toBe(true);
  })

  test('Error modal is hidden on initial mount', () => {
    expect(wrapper.contains('#error-modal')).toBe(false);
  })

  test('Render all the addresses including Add new card', async () => {
    const { addressBook } = await fetchAllAddresses();
    wrapper.setData({ addressBook: addressBook });
    await Vue.nextTick();
    expect(wrapper.findAll(Card).length).toBe(addressBook.length + 1);
  });

  test('Hide error modal on successfull data fetch', async () => {
    const { addressBook } = await fetchAllAddresses();
    wrapper.setData({ addressBook: addressBook });
    await Vue.nextTick();
    expect(wrapper.contains('#error-modal')).toBe(false);
  });

  test('Show error modal on un-successfull data fetch', async () => {
    wrapper.setData({ showErrorModal: true });
    await Vue.nextTick();
    expect(wrapper.contains('#error-modal')).toBe(true);
  });
})


beforeEach(() => {
  const state = {
    addressBook: [],
    showErrorModal: false
  };
  wrapper = shallowMount(Index, {
    localVue,
    propsData: {},
    mocks: {},
    stubs: {},
  });
});

afterEach(() => {
  wrapper.destroy();
});