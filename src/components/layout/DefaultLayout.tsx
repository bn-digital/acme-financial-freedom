import {Layout, Spin} from 'antd'
import { FC, Suspense, useState } from 'react'
import { Outlet } from 'react-router'
import { Context, defaultValues } from '../context/Context'
import { Modal } from '../modal/Modal'
import ModalContent from '../modal/ModalContent'
import Header from "../header/Header";
import {useLocation} from "react-router-dom";

const DefaultLayout: FC = () => {
    const location = useLocation()
    const currentUrl = location.pathname
  const [isModalOpen, setIsModalOpen] = useState(defaultValues.isModalOpen)
  const [modalType, setModalType] = useState(defaultValues.modalType)
  const [documentInfo, setDocumentInfo] = useState(defaultValues.documentInfo)

  return (
    <Context.Provider
      value={{
        modalType,
        setModalType,
        isModalOpen,
        setIsModalOpen,
        documentInfo,
        setDocumentInfo,
      }}
    >
      <Layout>
           <Header />
            <Suspense fallback={<Spin />}>
              <Outlet />
            </Suspense>
      </Layout>
      <Modal open={isModalOpen}>
        <ModalContent />
      </Modal>
    </Context.Provider>
  )
}

export { DefaultLayout }
