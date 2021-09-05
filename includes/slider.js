function Slider(locations){
    let template = ''//<div class="center padding large top" id="match"></div>'
    for(let {image} of locations){
        template += `
            <img src=${image} class="sticker-gallery" loading="lazy">
            `
    }
    return template;
}

export default Slider