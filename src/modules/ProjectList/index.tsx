import {SearchPanel, List} from "./components";
import {useEffect, useState} from "react";
import {cleanObject, useDebounce} from "../../utils";
import {apiUrl} from "../../dicts";
import qs from 'qs';

const ProjectList = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    });
    const [users, setUsers] = useState([]);
    const [list, setList] = useState([]);

    const debounceParam = useDebounce(param, 500);

    useEffect(() => {
        fetch( `${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async res=>{
            if (res.ok) {
                setList(await res.json())
            }
        })
    }, [debounceParam]);

    useEffect(() => {
        console.log('ddd')
        fetch( `${apiUrl}/users`).then(async res => {
            setUsers(await res.json())
        });
    }, []);

    return (
        <>
            <SearchPanel param={param} setParam={setParam} users={users} />
            <List users={users} list={list} />
        </>
    );
}

export default ProjectList;
