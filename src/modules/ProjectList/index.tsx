import {SearchPanel, List} from "./components";
import {useEffect, useState} from "react";
import {useDebounce} from "../../utils";
import {apiUrl} from "../../dicts";

const ProjectList = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    });
    const [users, setUsers] = useState([]);
    const [list, setList] = useState([]);

    const debounceParam = useDebounce(param, 2000);

    useEffect(() => {
        fetch( `${apiUrl}/projects`).then(async res=>{
            if (res.ok) {
                setList(await res.json())
            }
        })
    }, [debounceParam]);

    useEffect(() => {
        fetch( `${apiUrl}/users`).then(async res => {
            setUsers(await res.json())
        });
    }, []);

    return (
        <>
            <SearchPanel param={param} setParam={setParam} users={users} setUsers={setUsers} />
            <List users={users} list={list} />
        </>
    );
}

export default ProjectList;
