export default class View{
    load(path, data){
        path = `../../apps/views/${path}.js`;
        import(path).then((viewModule) => {
            document.body.innerHTML += viewModule.default(data);
        });
    }
}