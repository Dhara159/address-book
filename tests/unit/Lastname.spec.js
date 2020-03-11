import { shallowMount, createLocalVue } from '@vue/test-utils';
import LastName from './../../src/components/LastName';

const localVue = createLocalVue();

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(LastName, {
    localVue,
    propsData: {
      value: '',
      v: {
        $modal: 'Vihol'
      }
    },
  });
});

describe('LastName.vue', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});

afterEach(() => {
  wrapper.destroy();
});

// Todo
// Write validation test cases for all UI components