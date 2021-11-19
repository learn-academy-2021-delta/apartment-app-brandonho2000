import React from "react";
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApartmentIndex from "./ApartmentIndex";
import mockApps from "../mockApps"

Enzyme.configure({ adapter: new Adapter() })

describe("When ApartmentIndex renders", () => {
    it("displays a heading", () => {
      const apartmentIndex = shallow(<ApartmentIndex apartments={mockApps} />)
      const indexHeading = apartmentIndex.find("h3")
      expect(indexHeading.text()).toEqual("Availible Apartments")
    })
  })