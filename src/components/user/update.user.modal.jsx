import { useState } from "react"
import { Button, Input, Modal, notification } from "antd";

const UpdateUserModal = () => {

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    const [isModalOpen, setIsModalOpen] = useState(true)


    const handleSubmitBtn = async () => {

        const res = await createUserAPI(fullName, email, password, phone)
        if (res.data) {
            notification.success({
                message: "Create user",
                description: " Tạo user thành công",

            })
            resetAndCloseModal()
            loadUser()
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }

        //console.log(">>> check state: ", res.data)
    }

    const resetAndCloseModal = () => {
        setIsModalOpen(false);
        setFullName("");
        setEmail("");
        setPassword("");
        setPhone("");
    }


    return (
        <Modal
            title="Update User"
            open={isModalOpen}
            onOk={() => handleSubmitBtn()}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText={"UPDATE"}
        >

            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div >
                    <span>Full Name</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }} />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }} />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }} />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhone(event.target.value) }} />
                </div>
                {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h3>Table User</h3>
                        <Button
                            onClick={() => { handleClickBtn() }}
                            type="primary"> Create User</Button>
                    </div> */}
            </div>
        </Modal>
    )
}

export default UpdateUserModal;