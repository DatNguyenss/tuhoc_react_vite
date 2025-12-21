import { Flex, Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { fetchAllUserAPI } from '../../services/api.service';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';




//const App: React.FC = () => <Table<DataType> columns={columns} dataSource={data} />;


const UserTable = (props) => {

    const { dataUser } = props;

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a href="#" > {record._id}</a>
                )
            }
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',

        },
        {
            title: 'Email',
            dataIndex: 'email',

        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <EditOutlined style={{ cursor: "pointer", color: "orange" }} />
                    <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                </Space>
            ),
        },
        //     {
        //         title: 'Tags',
        //         key: 'tags',
        //         dataIndex: 'tags',
        //         render: (_, { tags }) => (
        //             <Flex gap="small" align="center" wrap>
        //                 {tags.map(tag => {
        //                     let color = tag.length > 5 ? 'geekblue' : 'green';
        //                     if (tag === 'loser') {
        //                         color = 'volcano';
        //                     }
        //                     return (
        //                         <Tag color={color} key={tag}>
        //                             {tag.toUpperCase()}
        //                         </Tag>
        //                     );
        //                 })}
        //             </Flex>
        //         ),
        //     },
        //     {
        //         title: 'Action',
        //         key: 'action',
        //         render: (_, record) => (
        //             <Space size="middle">
        //                 <a>Invite {record.name}</a>
        //                 <a>Delete</a>
        //             </Space>
        //         ),
        //     },
    ];

    // loadUser();
    return (
        <>
            <UpdateUserModal />
            <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />
        </>

    )
}

export default UserTable;