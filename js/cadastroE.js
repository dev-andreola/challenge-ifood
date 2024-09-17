let image = document.createElement('img')
image.setAttribute("id", "img1")
const input = document.getElementById('photo')
const corpo = document.getElementById('body')
const divss = document.getElementsByTagName('body') 
const leitor = new FileReader();


input.addEventListener('change', function (){
    leitor.onload = function (){
        
        image.src = leitor.result
         divss.innerHTML = corpo.insertBefore(image,input)

        console.log(image)
    }


leitor.readAsDataURL(input.files[0],)
}, false)




