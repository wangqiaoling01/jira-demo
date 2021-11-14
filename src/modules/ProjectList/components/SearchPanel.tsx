
export const SearchPanel = (props: any) => {
  const {param, setParam, users} = props;

  return (
      <form>
          <div>
              <input
                  placeholder={'项目'}
                  type={'text'}
                  value={param.name}
                  onChange={
                      (evt) => setParam({...param, name: evt.target?.value})
                  }
              />
              <select value={param.personId} onChange={evt => setParam({
                  ...param,
                  personId: evt.target.value
              })}>
                  <option value={''}>负责人</option>
                  {
                      users.map((user: any) => (
                          <option value={user.id}>{user.name}</option>
                      ))
                  }
              </select>
          </div>
      </form>
  )
};

