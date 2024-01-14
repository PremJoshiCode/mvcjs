class View{
    load(path, data){
        path = `../../apps/views/${path}.js`;
        import(path).then((viewModule) => {
            document.getElementById('_root').innerHTML = viewModule.default(data);
        });
    }
}

export default new View();