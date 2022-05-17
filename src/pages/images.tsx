
import { Layout, Menu, Breadcrumb, Button, Modal } from 'antd';
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

/*
    Login data
    login: projekt
    hasło: programistyczny
    basic: Basic cHJvamVrdDpwcm9ncmFtaXN0eWN6bnk=
*/

interface Response {
    image: string
    name: string
}

const { Header, Content, Footer } = Layout;

export const Images: React.FC = () => {
    const [images, setImages] = useState<Response[] | undefined>(undefined)
    const [modalContent, setModalContent] = useState<Response | undefined>(undefined)
    const navigate = useNavigate()

    const fetchImages = async () => {
        const basic = localStorage.getItem('basic')
        const { data } = await axios.get<Response[]>('/images?q=proxy', {
            headers: {'Authorization': 'Basic '+ basic}
        })
        setImages(data)
    }

    const deleteImage = async (image: Response) => {
        try {
            await axios.delete(`/images/${image.name}?q=proxy`, {
                headers: {
                    "access-control-allow-origin" : "*",
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
        } catch (e) {
            console.log(e)
        } finally {
            await fetchImages()
            setModalContent(undefined)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('basic')
        navigate('/')
    }

    useEffect(() => {
        fetchImages()
    }, [])

    const showModal = (image: Response) => {
        setModalContent(image);
    };

    const handleOk = () => {
        setModalContent(undefined);
    };

    const handleCancel = () => {
        setModalContent(undefined);
    };




    return (
        <div className='relative'>
            <Layout className="layout">
                <div className='absolute top-0 left-0 w-full'>
                    <Header>
                        <div className="logo" />
                        <div className='relative'>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                            />
                            <div className='absolute top-1/2 right-0 trnasform -translate-y-1 mt-1'>
                                <Button type="primary" shape="round" onClick={handleLogout}>Log out</Button>
                            </div>
                        </div>
                    </Header>
                </div>
                <div className='min-h-screen pt-20'>
                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Login</Breadcrumb.Item>
                            <Breadcrumb.Item>Images</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-content grid grid-cols-3 gap-6 mt-10">
                            {images && (
                                images.map((response) => (
                                    <div key={`image-${response.name}`} onClick={() => showModal(response)} className='cursor-pointer overflow-hidden'>
                                        <img src={`data:image/png;base64,${response.image}`} alt="image" className='hover:scale-105 duration-200'/>
                                    </div>

                                ))
                            )}
                        </div>
                    </Content>
                </div>
                <div>
                    <Footer style={{ textAlign: 'center' }}>CCTV App ©2018 </Footer>
                </div>
            </Layout>
            <Modal title={modalContent ? `Image: ${modalContent.name}` : ''} visible={!!modalContent} onOk={handleOk} onCancel={handleCancel}>
                {modalContent && <Button type="primary" danger onClick={() => deleteImage(modalContent)}>
                    Delete image
                </Button>}
            </Modal>
        </div>

    )
}