export const List = (props: any) => {
    const {list, users} = props;
    return (
        <table>
            <thead>
                <tr>
                    <th>名称</th>
                    <th>负责人</th>
                </tr>
            </thead>
            <tbody>
            {
                list.map((project: any) => (
                    <tr>
                        <td>{project.name}</td>
                        <td>{users.find((user: any) => user.id === project.personId)?.name || '未知'}</td>
                    </tr>
                ))
            }
            </tbody>

        </table>
    )
};

