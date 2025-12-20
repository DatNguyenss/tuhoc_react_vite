import { Flex, Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { fetchAllUserAPI } from '../../services/api.service';




//const App: React.FC = () => <Table<DataType> columns={columns} dataSource={data} />;


const UserTable = () => {

    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
        loadUser()
    }, []);

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',

        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',

        },
        {
            title: 'Email',
            dataIndex: 'email',

        }
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
    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        //console.log(">>> end", res)
        setDataUser(res.data)
    }
    // loadUser();
    return (
        <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />
    )
}

export default UserTable;