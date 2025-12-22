import { useEffect, useState } from "react"
import { Button, Input, Modal, notification } from "antd";

const UpdateUserModal = (props) => {

    const [id, setId] = useState("")
    const [fullName, setFullName] = useState("")
    const [phone, setPhone] = useState("")

    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate } = props
    //const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(true)

    useEffect(() => {
        if (dataUpdate) {
            setId(dataUpdate._id);
            setFullName(dataUpdate.fullName);
            setPhone(dataUpdate.phone);
        }
    }, [dataUpdate])

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
        setIsModalUpdateOpen(false);
        setFullName("");
        setId("");
        setPhone("");
        setDataUpdate(null);
    }


    return (
        <Modal
            title="Update User"
            open={isModalUpdateOpen}
            onOk={() => handleSubmitBtn()}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText={"UPDATE"}
        >

            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>ID</span>
                    <Input
                        value={id}
                        disabled />
                </div>
                <div >
                    <span>Full Name</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }} />
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