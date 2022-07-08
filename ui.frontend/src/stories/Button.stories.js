import TitleSection from '../components/TitleSection/titleSection'

export default {
    title: "Title",
    component: TitleSection,
}

const Template = args => <TitleSection{...args} />

export const Red = Template.bind({})
export const Gray = Template.bind({})

Red.args = {
    title: 'Title',
    titleSize: "md",
    paragraph: 'Paragraph',
    color: 'red',
}

Gray.args = {
    title: 'Title',
    titleColor: '#e0e0e0',
    paragraph: 'Paragraph',
}