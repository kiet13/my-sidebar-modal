import React, {useState} from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import ButtonCollapse from '../components/Button/ButtonCollapse'
import Button from '../components/Button/Button'
import Modal from '../components/Modal/Modal';

export default function SidebarModalBuilder() {
  const [showSidebar, setShowSideBar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openSidebarHandle = () => {
    setShowSideBar(true);
  }

  const closeSidebarHandle = () => {
    setShowSideBar(false)
  }
  return (
    <>
      <Modal show={showModal} modalClosed={() => setShowModal(false)}>
        <h1 className="content-placeholder">Modal Content</h1>
      </Modal>
      <ButtonCollapse classes="top-left" openSidebarHandler={openSidebarHandle} />
      <Sidebar show={showSidebar} closeHandler={closeSidebarHandle}/>
      <Button classes="center" clicked={() => setShowModal(true)}>Show modal</Button>
    </>
  )
}
