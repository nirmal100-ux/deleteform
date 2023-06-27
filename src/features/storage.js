



export const crudInfo = (infos) => {
  localStorage.setItem('infos', JSON.stringify(infos));
}


export const getInfos = () => {
  const data = localStorage.getItem('infos');
  return data === null ? [] : JSON.parse(data);
}