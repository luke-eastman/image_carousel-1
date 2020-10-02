import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';
import App from '../Client/App.jsx';
import SideBar from '../Client/SideBar.jsx';
import SideBarEntry from '../Client/sideBarEntry.jsx';
import { mount } from 'enzyme';
import MainImage from '../Client/mainImage.jsx'
const faker = require('faker');



test('truth serum', () => {
  expect('true').toBe('true');
});

var mockImageDataCreator = function(numberOfEnries) {

    var dataEntries = [];
    for (var i = 0; i < numberOfEnries; i++) {
      dataEntries.push({
         product: faker.commerce.productName().split(' ').join('-'),
         imageName: faker.commerce.productDescription(),
         color: faker.commerce.color().split(' ').join('-'),
         url: 'https://target-image-carousel.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-24+at+5.21.25+PM.png',
         alt: faker.image.abstract()
      })
    }
    return dataEntries;
  }

  var mockImages = mockImageDataCreator(7);
  var mockSideBarImages = mockImages.slice(0, 5)
  var mockOneImage = mockImages[0];


describe('App', () => {

  test('should render the App component correctly', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot();
  })
  test('should render SideBar', () => {
    const wrapper = shallow(<SideBar imageList={mockSideBarImages}/>);
    expect(wrapper.exists()).toBe(true);
  })

  test('should render one main image', () => {
    const wrapper = mount(<MainImage image={mockOneImage}/>);
    expect(wrapper.find('MainImage')).toHaveLength(1);
  })
})


describe('SideBar', () => {
  test('should render 5 sidebar entry image components', () => {
    const wrapper = mount(<SideBar imageList={mockSideBarImages}/>);
    expect(wrapper.find('SideBarEntry')).toHaveLength(5);
  })
  test('each sidebar entry should have an img tag', () => {
    const wrapper = mount (<SideBarEntry image={mockOneImage}/>);
   expect(wrapper.find('img')).toHaveLength(1)
  })

})
