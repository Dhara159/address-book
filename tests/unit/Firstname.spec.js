import { shallowMount, createLocalVue } from '@vue/test-utils';
import FirstName from './../../src/components/FirstName';

const localVue = createLocalVue();

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(FirstName, {
    localVue,
    propsData: {
      value: '',
      v: {
        $modal: 'Dhara'
      }
    },
  });
});

describe('FirstName.vue', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

});

afterEach(() => {
  wrapper.destroy();
});