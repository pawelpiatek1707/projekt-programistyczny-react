import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const LogIn: React.FC = () => {
    const navigate = useNavigate()
    const onFinish = async(values: any) => {
        const {username, password} = values
        try {
            const {data} = await axios.post('/login?q=proxy', {
                username,
                password
            })
            const {basic} = data
            if(process.env.REACT_APP_BASIC_TOKEN === basic) {
                localStorage.setItem('basic', basic)
                navigate('/images')
            }
        } catch {
            alert('Error')
        }

    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="w-full h-screen flex justify-center items-center bg-gray-400">
            <div className='shadow-xl px-10 py-12 bg-white rounded-md'>
                <h1 className='mb-6 w-full text-center text-lg'>Log in</h1>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    )
}