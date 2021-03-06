import React from 'react'
import {
  CContainer,
  CCol,
  CRow,
  CForm,
  CFormLabel,
  CFormInput,
  CFormText,
  CFormCheck,
  CButton,
  CTable,
  CTableHead,
  CTableBody,
  CTableDataCell,
  CTableRow,
  CTableHeaderCell,
} from '@coreui/react'
import Button from 'devextreme-react/button'
import TabPanel, { Item } from 'devextreme-react/tab-panel'

function LandingPage() {
  return (
    <>
      <CContainer>
        <CRow>
          <h3 className="text-center">Landing Page for experimentation - Use Sidebar Menu</h3>
        </CRow>
        <CRow>
          <CCol md={4} className="text-primary border bg-danger">
            .col-md-4
          </CCol>
          <CCol md={4} className="ms-auto">
            .col-md-4 .ms-auto
          </CCol>
        </CRow>
        <CRow>
          <CCol md={3} className="ms-md-auto">
            .col-md-3 .ms-md-auto
          </CCol>
          <CCol md={3} className="ms-md-auto">
            .col-md-3 .ms-md-auto
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="auto" className="me-auto">
            .col-auto .me-auto
          </CCol>
          <CCol xs="auto">.col-auto</CCol>
        </CRow>
        <CRow>
          <Button onClick={() => alert('pressed Dev-Extreme Button')}>Dev Extreme Buton</Button>
        </CRow>
      </CContainer>
      <CForm>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleInputEmail1">Email address</CFormLabel>
          <CFormInput type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <CFormText id="emailHelp">We will never share your email with anyone else.</CFormText>
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleInputPassword1">Email Password</CFormLabel>
          <CFormInput type="password" id="exampleInputPassword1" />
        </div>
        <CFormCheck
          className="mb-3"
          label="Check me out"
          onChange={(e) => {
            console.log(e.target)
          }}
        />
        <CButton type="submit" color="primary">
          Submit
        </CButton>
      </CForm>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Class</CTableHeaderCell>
            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>Mark</CTableDataCell>
            <CTableDataCell>Otto</CTableDataCell>
            <CTableDataCell>@mdo</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">2</CTableHeaderCell>
            <CTableDataCell>Jacob</CTableDataCell>
            <CTableDataCell>Thornton</CTableDataCell>
            <CTableDataCell>@fat</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">3</CTableHeaderCell>
            <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
            <CTableDataCell>@twitter</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
      <TabPanel>
        <Item title="Employee">
          <div>Item 1 Content</div>
        </Item>
        <Item title="Notes">
          <div>Item 2 Content</div>
        </Item>
        <Item title="Role">
          <div>Item 3 Content</div>
        </Item>
      </TabPanel>
    </>
  )
}
export default LandingPage
