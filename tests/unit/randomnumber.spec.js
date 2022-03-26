import { shallowMount } from "@vue/test-utils";
import RandomNumber from "@/components/RandomNumber.vue"

describe("RandomNumber", () => {
    it("By default the random number should be 0", () => {
        const wrapper = shallowMount(RandomNumber)
        expect(wrapper.html()).toContain('0');
    });
});


test('IF BUTTON CLICKED the random number should be 1-10', async () => {
    const wrapper = shallowMount(RandomNumber)
    await wrapper.find('button').trigger('click')
    const random_number = parseInt(wrapper.find('h2').text())
    expect(random_number).toBeGreaterThanOrEqual(1)
    expect(random_number).toBeLessThanOrEqual(10)
})

test('IF BUTTON CLICKED the random number should be 50-100', async () => {
    const wrapper = shallowMount(RandomNumber, {
        props: {
            min: 50, max: 100
        }
    })

    await wrapper.find('button').trigger('click')
    const random_number = parseInt(wrapper.find('h2').text())
    expect(random_number).toBeGreaterThanOrEqual(50)
    expect(random_number).toBeLessThanOrEqual(100)
})