import { shallowMount, createLocalVue } from '@vue/test-utils';
import DateComp from './../../src/components/Date'

const localVue = createLocalVue();

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(DateComp, {
    localVue,
    propsData: {
      value: '',
      v: {
        $modal: '1990-12-12'
      }
    },
  });
});

describe('Date.vue', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});

afterEach(() => {
  wrapper.destroy();
});