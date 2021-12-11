const API = 'https://api.giphy.com/v1/gifs/search?api_key='
const KEY = 'sTdCJjIAUz2fNDMUob8nqHx6G50HnUzP'
const secondStr = '&limit=25&q='

const input = document.getElementById('input')
const btn = document.getElementById('btn')
const output = document.getElementById('output')

const searhGiphy = async (e) => {
    e.preventDefault()
    let text = input.value
    let url = API + KEY + secondStr + text
    let request = await fetch(url)
    let response = await request.json() 
    input.value=''
    output.innerHTML=''
    console.log(response.data);
    renderGiphy(response.data)
   
}
const renderGiphy = (data) => {
    data.forEach(el => {
        let div = document.createElement('div')
        div.className ='box'
        let iframe = document.createElement('iframe')
        iframe.className = 'box_child'
        let h3 = document.createElement('h3')
        h3.className = 'text'
        iframe.src = el.embed_url
        output.append(div)
        div.append(h3, iframe)
    })
}
btn.addEventListener('click', searhGiphy)